import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import bookingReducer from "./features/bookingSlice";
import { baseApi } from "./api/baseApi";

const rootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
