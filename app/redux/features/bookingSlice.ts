import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
    tourId?: string | null;
    journeyDate?: string | null;
    travellers?: number | null;
    FirstName?: string | null;
    LastName?: string | null;
    Email?: string | null;
    Phone?: string | null;
    gender?: string | null;

}

const initialState: BookingState = {
    tourId: null,
    journeyDate: null,
    travellers: 1,
    FirstName: null,
    LastName: null,
    Email: null,
    Phone: null,
    gender: null,
};

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setJourney: (state, action: PayloadAction<{ journeyDate: string; travellers: number }>) => {
            state.journeyDate = action.payload.journeyDate;
            state.travellers = action.payload.travellers;
        },
        setUserInfo: (state, action: PayloadAction<{ FirstName: string; LastName: string; Email: string; Phone: string, gender: string }>) => {
            state.FirstName = action.payload.FirstName;
            state.LastName = action.payload.LastName;
            state.Email = action.payload.Email;
            state.Phone = action.payload.Phone;
            state.gender = action.payload.gender;
        },
    },

});

export const { setJourney, setUserInfo } = bookingSlice.actions;
export default bookingSlice.reducer;
