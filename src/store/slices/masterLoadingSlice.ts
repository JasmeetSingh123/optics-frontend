import { createSlice } from "@reduxjs/toolkit";


export const masterLoadingSlice = createSlice({
  name: 'master-loading',
  initialState: true,
  reducers: {
    toggle: function (state, action) {
      state = !state
    },
    makeTrue: function (state, action) {
      state = true
    },
    makeFalse: function (state, action) {
      state = false
    },
  },
});


export const { toggle, makeTrue, makeFalse } = masterLoadingSlice.actions;
export default masterLoadingSlice.reducer;
export const selectMasterLoadingState = (state: boolean) => state;

