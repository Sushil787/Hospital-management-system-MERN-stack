import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
  name: "alerts",
  initialState: {
    id:null
  },
  reducers: {
    getId: (state,action) => {
      state.id=action.payload
    }
   
  },
});

export const { getId } = idSlice.actions;
export default idSlice.reducer