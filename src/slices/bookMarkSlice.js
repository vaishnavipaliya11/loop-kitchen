import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBookMarks: [],
};

export const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookMark: (state, action) => {
      state.allBookMarks.push(action.payload.restaurantName);
    },
    removeFromBookMark: (state, action) => {
      state.allBookMarks = state.allBookMarks.filter(
        (item) => item !== action.payload.restaurantName
      );
    },
  },
  extraReducers: {},
});
export const { addToBookMark, removeFromBookMark } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
