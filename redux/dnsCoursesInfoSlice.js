import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDnsCourses = createAsyncThunk("dnsCoursesInfo/fetchDnsCourses", async () => {
  const response = await axios.get("https://adpi.pear-education.com/GetCoursesByEducSub?StudentId=&CurrentLang=1&UserNameOrPhone=&DeviceID=&token=&EducationSubID=382");
  return response.data;
});

const initState = { coursesData: [], status: null };
const dnsCoursesInfoSlice = createSlice({
  name: "dnsCoursesInfo",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [fetchDnsCourses.fulfilled]: (state, action) => {
      state.coursesData = action.payload;
      state.status = "success";
    },
    [fetchDnsCourses.pending]: (state) => {
      state.status = "loading";
    },
    [fetchDnsCourses.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { id } = dnsCoursesInfoSlice.actions;

export default dnsCoursesInfoSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const coursesData = [
//   {
//     id: 1,
//     uri: require("../assets/pearImages/2.png"),
//     title: "Advanced - UI/UX Design 1",
//     duration: "2h 30min",
//     price: "120$",
//     name: "Ahmed Selem",
//   },
//   {
//     id: 2,
//     uri: require("../assets/pearImages/5.png"),
//     title: "Advanced - UI/UX Design 2",
//     duration: "3h 30min",
//     price: "120$",
//     name: "Ahmed Selem",
//   },
//   {
//     id: 3,
//     uri: require("../assets/pearImages/8.png"),
//     title: "Advanced - UI/UX Design 3",
//     duration: "4h 30min",
//     price: "120$",
//     name: "Ahmed Selem",
//   },
//   {
//     id: 4,
//     uri: require("../assets/pearImages/2.png"),
//     title: "Advanced - UI/UX Design 4",
//     duration: "5h 30min",
//     price: "120$",
//     name: "Ahmed Selem",
//   },
//   {
//     id: 5,
//     uri: require("../assets/pearImages/5.png"),
//     title: "Advanced - UI/UX Design 5",
//     duration: "6h 30min",
//     price: "120$",
//     name: "Ahmed Selem",
//   },
//   {
//     id: 6,
//     uri: require("../assets/pearImages/8.png"),
//     title: "Advanced - UI/UX Design 6",
//     duration: "7h 30min",
//     price: "120$",
//     name: "Ahmed Selem",
//   },
// ];

// const initState = { coursesData };
// const dnsCoursesInfoSlice = createSlice({
//   name: "dnsCoursesInfo",
//   initialState: initState,
//   reducers: {},
// });

// // Action creators are generated for each case reducer function
// // export const { } = dnsCoursesInfoSlice.actions;

// export default dnsCoursesInfoSlice.reducer;