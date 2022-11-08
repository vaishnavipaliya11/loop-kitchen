import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../features/auth";

const initialState = {
  isAuth: false,
  authUserDetails: { username: "", password: "" },
  availableUserData: [],
};

export const authSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isAuth= false;
    },
    [getAllUsers.fulfilled]: (state, {  payload }) => {
      state.isAuth=true
      state.availableUserData= payload
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.isAuth=false
    },
  },
});

export default authSlice.reducer;
