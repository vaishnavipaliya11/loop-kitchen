import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBookMarks: [],
};

export const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookMark: (state, action) => {
        console.log(action.payload.restaurantName);
        state.allBookMarks.push(action.payload.restaurantName);
    },
  },
  extraReducers: {},
});
export const { addToBookMark } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
