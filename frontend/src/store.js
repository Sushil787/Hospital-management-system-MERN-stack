import { configureStore } from "@reduxjs/toolkit";
import getDoctor from "./Components/User/slices/getDoctor"
import getService from "./Components/User/slices/getService"
import Loginslice from "./Components/User/slices/Loginslice"
import {alertSlice} from "./Components/User/slices/Loadingslice";
import thunk from "redux-thunk";
import getPatients  from "./Components/User/slices/patientSlice";

export const store = configureStore({
  reducer: {
    doctor: getDoctor,
    login:Loginslice,
    loading:alertSlice.reducer,
    patient: getPatients,
    service:getService,

  },
  middleware:[thunk]
});
