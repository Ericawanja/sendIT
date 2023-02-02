import { createAsyncThunk } from "@reduxjs/toolkit";
import userParcelsService from "../../services/userParcels.service";

export const getUserParcels = createAsyncThunk(
    'get user parcels',
    async (payload, thunkApi)=>{
        const response = await userParcelsService.GetAllUserParcels()
        console.log(response);
        if(response.error){
            thunkApi.rejectWithValue(response.error)
        }

        

    }
)