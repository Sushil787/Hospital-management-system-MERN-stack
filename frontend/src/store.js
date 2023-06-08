import { configureStore } from "@reduxjs/toolkit";
import getDoctor from "./Components/User/slices/getDoctor"
import Loginslice from "./Components/User/slices/Loginslice"
export const store = configureStore({
  reducer: {
    doctor: getDoctor,
    login:Loginslice
  },
});
