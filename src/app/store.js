import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import resturantsReducer from "../slices/restaurantSlice"
export const store = configureStore({
    reducer: {
     auth:authReducer,
     resturants:resturantsReducer
    },
  });