import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
};
const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    loadingFalse(state) { state.loading = false },
    loadingTrue(state) {
      state.loading = true;
    },

  },
});

// Action creators are generated for each case reducer function
export const { loadingTrue, loadingFalse } = loadingSlice.actions;

export default loadingSlice.reducer;