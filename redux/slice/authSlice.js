import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        signInInfo: {},
        isLoading: false,
    },
    reducers: {
        signInAction: (state, { payload }) => {
            state.signInInfo = payload.response;
            state.isLoading = payload.isLoading;
        },
    },
});

export const {
    signInAction,
} = authSlice.actions;

export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;
