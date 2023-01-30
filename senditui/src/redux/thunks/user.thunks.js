import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/user.service";

export const registerUser = createAsyncThunk(
  "user/signup",
  async (payload, thunkApi) => {
    const response = await userService.RegisterUser(payload);

    if (response.error) {
      return thunkApi.rejectWithValue({ error: response.error });
    }

    return response.data;
  }
);



export const loginUser = createAsyncThunk(
    "user/login",
    async(payload, thunkApi)=>{
        const response = await userService.LoginUser(payload)

        if(response.error){
            return thunkApi.rejectWithValue({error:response.error})
        }

        return response.data
    }

)