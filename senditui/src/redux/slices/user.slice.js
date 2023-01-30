import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../thunks/user.thunks";

const initialState = {
  loading: false,
  error: "",
  registered:false
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.error = ""
      state.loading = false
      state.registered = true
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
    

      state.error = action.payload.error;
    });
  },
});

export default userSlice.reducer;
