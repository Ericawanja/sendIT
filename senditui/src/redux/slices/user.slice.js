import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../thunks/user.thunks";

const initialState = {
  loading: false,
  error: "",
  registered: false,
  user: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetState: (state, action) => {
      state.loading = false;
      state.error = "";
      state.registered = false;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;
      state.registered = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;

      state.error = action.payload.error;
    });

    //Login user

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      localStorage.setItem("token", action.payload.token);
      state.user = action.payload.user;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const { resetState } = userSlice.actions;

export default userSlice.reducer;
