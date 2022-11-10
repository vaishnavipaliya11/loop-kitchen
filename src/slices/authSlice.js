import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../features/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  isAuth: cookies.get("isAuth"),
  availableUserData: [],
  authUserDetails: {
    username: cookies.get("auth-user") ? cookies.get("auth-user") : "",
    password: cookies.get("auth-password") ? cookies.get("auth-password") : "",
  },
};

const saveDataInCookies = (username, password) => {
  cookies.set("isAuth", JSON.stringify(true), { maxAge: 600 });
  cookies.set("auth-user", username, { maxAge: 600 });
  cookies.set("auth-password", password, { maxAge: 600 });
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
      saveDataInCookies(
        state.authUserDetails.username,
        state.authUserDetails.password
      );
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      // state.isAuth = false;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.availableUserData = payload;
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      // state.isAuth = false;
    },
  },
});
export const { checklogin, userNameHandler, passwordHandler } =
  authSlice.actions;
export default authSlice.reducer;
