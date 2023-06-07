import { configureStore } from "@reduxjs/toolkit";
import getDoctor from "./slices/getDoctor";
import Loginslice from "./slices/Loginslice";
export const store = configureStore({
  reducer: {
    doctor: getDoctor,
    login:Loginslice
  },
});
