import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../features/auth";

const initialState = {
  isAuth: false,
  availableUserData: [],
  authUserDetails: { username: "", password: "" },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userNameHandler: (state, action) => {
      state.authUserDetails = {
        ...state.authUserDetails,
        username: action.payload,
      };
    },
    passwordHandler: (state, action) => {
      state.authUserDetails = {
        ...state.authUserDetails,
        password: action.payload,
      };
    },
    checklogin: (state, action) => {
      state.isAuth = true;
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isAuth = false;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.availableUserData = payload;
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.isAuth = false;
    },
  },
});
export const { checklogin, userNameHandler, passwordHandler } =
  authSlice.actions;
export default authSlice.reducer;
