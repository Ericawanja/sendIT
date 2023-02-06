import { createSlice } from "@reduxjs/toolkit";
import {
  
  getUserParcels,
} from "../thunks/userParcels.thunks";

const initialState = {
  parcels: {},
  error: "",
  loading: false,
};

const userParcels = createSlice({
  name: "user parcels",
  initialState,
  reducers: {
    resetParcelsState: (state, action) => {
      state.parcels = [];
      state.loading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserParcels.pending, (state, action) => {
      state.loading = true;
      state.parcels = {};
      state.error = "";
    });
    builder.addCase(getUserParcels.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;

      state.parcels = action.payload.parcels;
    });
    builder.addCase(getUserParcels.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.parcels = [];
    });
  },
});

export const { resetParcelsState } = userParcels.actions;
export default userParcels.reducer;
