import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const saveDataInCookies = (data)=>{
  console.log(data,"data");
  // cookies.set("bookmark", JSON.stringify(state.allBookMarks), { maxAge: 600 });
}
const initialState = {
  allBookMarks:cookies.get("bookmark") ? cookies.get("bookmark") : [],
};


export const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookMark: (state, action) => {
    state.allBookMarks.push(action.payload.restaurantName);
      cookies.set("bookmark", JSON.stringify(state.allBookMarks), { maxAge: 600 });
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
