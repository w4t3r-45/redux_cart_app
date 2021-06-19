import { constants } from './constants';
import axios from 'axios';

export const addItem = (pyld) => {
  return {
    type: constants.ADD_ITEM,
    payload: pyld
  }
}

export const removeItem = (pyld) => {
  return {
    type: constants.REMOVE_ITEM,
    payload: pyld
  }
}

export const toggle = () => {
  return {
    type: constants.TOGGLE
  }
}

// added to wotk with redux thunk (handle async calls)

export const fetchingData = () => {
  return {
    type: "FETCHING"
  }
}

export const dataReady = (data) => {
  return {
    type: "DATA_READY",
    payload: data
  }
}

// middlewares (we have access to dispatch and getState args because we've set redux-thunk in our store)

export const fetchData = () => async (dispatch, getState) => {
  dispatch(fetchingData());
  const response = await axios.get('http://localhost:3200/items');
  console.log("data: ", response);
  const items = response.data;
  dispatch(dataReady(items));
}