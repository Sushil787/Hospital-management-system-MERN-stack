import { configureStore } from "@reduxjs/toolkit";
import getDoctor from "./Components/User/slices/getDoctor"
import getService from "./Components/User/slices/getService"
import Loginslice from "./Components/User/slices/Loginslice"
import {alertSlice} from "./Components/User/slices/Loadingslice";
import thunk from "redux-thunk";
import getCart  from "./Components/User/slices/CartSlice";
export const store = configureStore({
  reducer: {
    doctor: getDoctor,
    login:Loginslice,
    loading:alertSlice.reducer,
    cart: getCart,
    service:getService
  },
  middleware:[thunk]
});
