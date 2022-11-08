import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllUsers = createAsyncThunk("auth/sign", async () => {
  const userApi =
    "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view";
  try {
    const { status, data } = await axios({
      method: "GET",
      url: userApi,
      headers: { authorization: "Bearer keyfXgn8PL6pB3x32" },
    });
    if (status === 200) {
      const userLog = data.records.map((record) => ({ ...record.fields }));
      return userLog;
    }
  } catch (error) {
    console.log(error);
  }
});

export { getAllUsers };
