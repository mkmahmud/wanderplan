import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: String | null;
    email: string | null;
}

const initialState: UserState = {
    id: null,
    email: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string, email: string }>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.id = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
