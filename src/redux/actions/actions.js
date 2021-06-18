import {constants} from './constants';

export const addItem = (pyld)=>{
  return {
    type:constants.ADD_ITEM,
    payload:pyld
  }
}

export const removeItem = (pyld) =>{
  return {
    type : constants.REMOVE_ITEM,
    payload: pyld
  }
}

export const toggle = ()=>{
  return{
    type:constants.TOGGLE
  }
}