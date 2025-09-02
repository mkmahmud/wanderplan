"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"; // adjust path
import bookingReducer from "./features/bookingSlice"; // adjust path

export const store = configureStore({
    reducer: {
        user: userReducer,
        booking: bookingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
