import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchInstractourInfo = createAsyncThunk("instractourInfo/fetchInstractourInfo", async () => {
  const response = await axios.get("https://asapi.pear-education.com//GetCourseInstractors?StudentId=&CurrentLang=1&UserNameOrPhone=&DeviceID=&token=");
  return response.data.DataResultsList.slice(0, 5);
});

// const instractourData = [
//   {
//     id: 1,
//     image: require("../assets/pearImages/teacher_Default.png"),
//     title: "Dr/Ahmed Mokhtar",
//     subtitle: "Hr Manager",
//   },
//   {
//     id: 2,
//     image: require("../assets/pearImages/stu-parent-03.png"),
//     title: "Dr/Aya",
//     subtitle: "Senior Backend",
//   },
//   {
//     id: 3,
//     image: require("../assets/pearImages/teacher_Default.png"),
//     title: "Dr/Mostafa ElShaeer",
//     subtitle: "Backend Manager",
//   },
//   {
//     id: 4,
//     image: require("../assets/pearImages/stu-parent-03.png"),
//     title: "Dr/Nariman Attia",
//     subtitle: "Team Leader",
//   },
//   {
//     id: 5,
//     image: require("../assets/pearImages/teacher_Default.png"),
//     title: "Dr/Mohsen Hussein",
//     subtitle: "Technical Manager",
//   },
// ];




const initState = { instractourData: [], status: null };
const instractourInfoSlice = createSlice({
  name: 'instractourInfo',
  initialState: initState,
  reducers: {},
  extraReducers: {
    [fetchInstractourInfo.fulfilled]: (state, action) => {
      state.instractourData = action.payload;
      state.status = "success";
    },
    [fetchInstractourInfo.pending]: (state) => {
      state.status = "loading";
    },
    [fetchInstractourInfo.rejected]: (state) => {
      state.status = "failed";
    },
  },
});


// Action creators are generated for each case reducer function
// export const { id } = instractourInfoSlice.actions;

export default instractourInfoSlice.reducer;