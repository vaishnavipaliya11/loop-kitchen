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
  extraReducers: {},
});

export default authSlice.reducer;
