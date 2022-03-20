import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledStatus: false,
};
const isEnrolledStatusSlice = createSlice({
  name: "enrolled",
  initialState: initialState,
  reducers: {
    enrolledTrue: (state) => { state.enrolledStatus = true },
    enrolledFalse: (state) => { state.enrolledStatus = false },
  },
});

// Action creators are generated for each case reducer function
export const { enrolledTrue, enrolledFalse } = isEnrolledStatusSlice.actions;

export default isEnrolledStatusSlice.reducer;