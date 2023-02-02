import { createSlice } from "@reduxjs/toolkit";
import { getUserParcels } from "../thunks/userParcels.thunks";

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
      state.parcels = {};
      state.loading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserParcels.pending, (state, action) => {});
  },
});


export const { resetParcelsState } = userParcels.actions;
export default userParcels.reducer;
