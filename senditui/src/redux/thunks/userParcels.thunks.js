import { createAsyncThunk } from "@reduxjs/toolkit";
import userParcelsService from "../../services/userParcels.service";

export const getUserParcels = createAsyncThunk(
  "get user parcels",
  async (payload = 'all', thunkApi) => {
    console.log(payload);
    const response = await userParcelsService.GetAllUserParcels(payload);

    if (response.error) {
      console.log(response);
      return thunkApi.rejectWithValue(response.error);
    }

    return response.data;
  }
);


