import { createAsyncThunk } from "@reduxjs/toolkit";
import Admin from "../../services/admin.service"

export const getAdminParcels = createAsyncThunk(
  "get all parcels",
  async (payload = "all", thunkApi) => {
    const response = await Admin.GetParcels(payload);

    if(response.error){
        
        return thunkApi.rejectWithValue(response.error)
    }
    return response.data
  }
);
