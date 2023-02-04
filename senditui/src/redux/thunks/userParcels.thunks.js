import { createAsyncThunk } from "@reduxjs/toolkit";
import userParcelsService from "../../services/userParcels.service";

export const getUserParcels = createAsyncThunk(
  "get user parcels",
  async (payload, thunkApi) => {
    const response = await userParcelsService.GetAllUserParcels();
 

    if (response.error) {
      console.log(response);
      return thunkApi.rejectWithValue(response.error);
    }
   
    return response.data
  }
);
