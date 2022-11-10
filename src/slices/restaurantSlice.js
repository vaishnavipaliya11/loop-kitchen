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
      state.selectedRes.push(action.payload);
    },
    deleteFromSelectedRestaurant: (state,action)=>{
      state.selectedRes= state.selectedRes.filter(data => data.name !== action.payload.restaurantName)
    }
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
export const { addToSelectedRestaurant ,deleteFromSelectedRestaurant} = resturantSlice.actions;
export default resturantSlice.reducer;
