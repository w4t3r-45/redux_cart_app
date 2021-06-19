import { constants } from '../actions/constants';

const INIT_STATE = {
  allItems:[],
  items: [],
  visible: true,
  totalQuantity: 0,
  fetching:false
}

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.ADD_ITEM:

      let newItem = { ...action.payload };

      // find will return reference to that object inside our state 
      // we must avoid playing with it because it will cause STATE MUTATION

      const existingItem = state.items.find(item => item.id === newItem.id);

      // if it doesn't exists we add it to our items table
      if (!existingItem) {
        newItem = { ...newItem, quantity: 1, totalPrice: newItem.price };
        return {
          ...state,
          items: [...state.items, newItem],
          totalQuantity: state.totalQuantity + 1,
        }


      } else {
        return {
          ...state,
          items: state.items.map(item => (
            item.id === existingItem.id ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price
            } : item
          ))
          ,
          totalQuantity: state.totalQuantity + 1
        }
      }
    case constants.REMOVE_ITEM:
      let currentItem = state.items.find(item => item.id === action.payload.id);
      if (currentItem.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(item => (
            item.id !== action.payload.id
          )),
          totalQuantity: state.totalQuantity - 1
        }
      } else {
        return {
          ...state,
          items: state.items.map(item => (
            item.id === action.payload.id ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price
            } : item
          )),
          totalQuantity: state.totalQuantity - 1
        }
      }
    case constants.TOGGLE:
      return {
        ...state,
        visible: !state.visible,
      }
    case "FETCHING":
      return{
        ...state ,
        fetching:true
      }
    case "DATA_READY":
      // here we will set our data to items table in our state object
      return{
        ...state , allItems : [...action.payload] , fetching:false
      }
    default:
      return state
  }
}