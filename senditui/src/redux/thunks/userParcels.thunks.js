import { createAsyncThunk } from "@reduxjs/toolkit";
import userParcelsService from "../../services/userParcels.service";

export const getUserParcels = createAsyncThunk(
  "get user parcels",
  async (payload = "all", thunkApi) => {
    const response = await userParcelsService.GetAllUserParcels(payload);

    if (response.error) {
     
      return thunkApi.rejectWithValue(response.error);
    }
    
    return {parcels:response.data.parcels, status:payload};
  }
);

export const getUserSingleParcel = createAsyncThunk(
  "get user single parcels",
  async (payload, thunkApi) => {
    const response = await userParcelsService.GetSingleUserParcel(payload);

    if (response.error) {
      console.log(response);
      return thunkApi.rejectWithValue(response.error);
    }
    console.log(response.data);
    return {parcel:response.data.parcels};
  }
);
