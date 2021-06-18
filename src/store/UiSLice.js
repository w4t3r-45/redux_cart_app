import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name:'uislice',

  initialState:{
    visible: true
  },
  reducers:{
    toggle(state){
      state.visible = !state.visible;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice; 