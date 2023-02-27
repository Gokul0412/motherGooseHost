import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
