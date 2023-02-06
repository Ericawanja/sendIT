import { createSlice } from "@reduxjs/toolkit";
import {
  getUserParcels,
  getUserSingleParcel,
} from "../thunks/userParcels.thunks";

const initialState = {
  parcels: [],
  parcel: {},
  status: "",
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

      state.status = action.payload.status;
      state.parcels = action.payload.parcels;
    });
    builder.addCase(getUserParcels.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.parcels = [];
    });
    builder.addCase(getUserSingleParcel.pending, (state, action) => {
      state.loading = true;
      state.parcel = {};
      state.error = "";
    });
    builder.addCase(getUserSingleParcel.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;

      state.parcel = action.payload.parcel;
    });
    builder.addCase(getUserSingleParcel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.parcel = {};
    });
  },
});

export const { resetParcelsState } = userParcels.actions;
export default userParcels.reducer;
