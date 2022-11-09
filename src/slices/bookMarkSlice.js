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
    removeFromBookMark: (state,action) =>{
      console.log(action.payload.restaurantName);
      state.allBookMarks.pop(action.payload.restaurantName)
    }
  },
  extraReducers: {},
});
export const { addToBookMark,removeFromBookMark } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
