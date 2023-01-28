import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/user.service";


export const registerUser = createAsyncThunk(
    "users/signup",
    async (payload, thunkApi)=> {
        const response = await userService.RegisterUser(payload)
        console.log(response);
    }
)