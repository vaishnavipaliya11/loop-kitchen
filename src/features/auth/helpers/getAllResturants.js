import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllResturants = createAsyncThunk("resturants/all", async () => {
  try {
    const { data, status } = await axios({
      method: "GET",
      url: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=9999&view=Grid%20view",
      headers: { authorization: "Bearer keyfXgn8PL6pB3x32" },
    });
    if (status === 200) {
      const resturantsData = data.records.map((record) => ({
        ...record.fields,
      }));
      return resturantsData;
    }
  } catch (error) {
    console.log(error);
  }
});

export { getAllResturants };
