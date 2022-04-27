import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showVideo: false,
  uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
};
const openVideoSlice = createSlice({
  name: "openVideo",
  initialState: initialState,
  reducers: {
    openVideo(state, action) { state.showVideo = true, state.uri = action.payload },
    closeVideo(state) {
      state.showVideo = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openVideo, closeVideo } = openVideoSlice.actions;

export default openVideoSlice.reducer;