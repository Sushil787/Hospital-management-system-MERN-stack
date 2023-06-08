import { configureStore } from "@reduxjs/toolkit";
import getDoctor from "./Components/User/slices/getDoctor"
import Loginslice from "./Components/User/slices/Loginslice"
import {alertSlice} from "./Components/User/slices/Loadingslice";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    doctor: getDoctor,
    login:Loginslice,
    loading:alertSlice.reducer,
  },
  middleware:[thunk]
});
