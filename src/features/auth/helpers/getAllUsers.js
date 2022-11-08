import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllUsers = createAsyncThunk(
  "auth/login",
  async ({ rejectWithValue }) => {
    try {
      const { status, data } = await axios(
        "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
        {
          headers: { authorization: "Bearer keyfXgn8PL6pB3x32" },
        }
      );
      if (status === 200) {
        console.log(data);
      }
      //   return data;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { getAllUsers };
