import { createSlice } from "@reduxjs/toolkit";
import { getAdminParcels } from "../thunks/admin.thunks";


const initialState = {
  parcels: [],
  parcel: {},
  status: "",
  error: "",
  loading: false,
};

const adminParcels = createSlice({
  name: "admin parcels",
  initialState,
  reducers: {
    resetParcelsState: (state) => {
      state.parcels = [];
      state.loading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAdminParcels.pending, (state, action) => {
      state.loading = true;
      state.parcels = {};
      state.error = "";
    });
    builder.addCase(getAdminParcels.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;

      state.status = 'all';
      state.parcels = action.payload.parcels;
    });
    builder.addCase(getAdminParcels.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.parcels = [];
    });
  },
});

export const { resetParcelsState } = adminParcels.actions;
export default adminParcels.reducer;
