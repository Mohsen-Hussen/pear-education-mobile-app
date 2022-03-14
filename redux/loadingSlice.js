import { createSlice } from "@reduxjs/toolkit";

// const loading = [{ status: false }]
// const initState = { status:false };
const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    loadingTrue: (state) => { state.initialState = true },
    loadingFalse: (state) => { state.initialState = false }
  },
});

// Action creators are generated for each case reducer function
export const { loadingTrue, loadingFalse } = loadingSlice.actions;

export default loadingSlice.reducer;