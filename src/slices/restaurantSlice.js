import { createSlice } from "@reduxjs/toolkit";
import { getAllResturants } from "../features/auth/helpers/getAllResturants";

const initialState = {
  allResturantsData: [],
  selectedRes: [],
};

const resturantSlice = createSlice({
  name: "resturants",
  initialState,
  reducers: {
    addToSelectedRestaurant: (state, action) => {
        console.log(action);
      state.selectedRes.push(action.payload);
    },
  },
  extraReducers: {
    [getAllResturants.pending]: (state) => {
      state.allResturantsData = [];
    },
    [getAllResturants.fulfilled]: (state, { payload }) => {
      state.allResturantsData = payload;
    },
    [getAllResturants.rejected]: (state, { payload }) => {
      state.allResturantsData = [];
    },
  },
});
export const { addToSelectedRestaurant } = resturantSlice.actions;
export default resturantSlice.reducer;
