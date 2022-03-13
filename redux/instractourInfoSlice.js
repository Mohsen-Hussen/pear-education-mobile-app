import { createSlice } from "@reduxjs/toolkit";

const instractourData = [
  {
    id: 1,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Dr/Ahmed Mokhtar",
    subtitle: "Hr Manager",
  },
  {
    id: 2,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Dr/Aya",
    subtitle: "Senior Backend",
  },
  {
    id: 3,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Dr/Mostafa ElShaeer",
    subtitle: "Backend Manager",
  },
  {
    id: 4,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Dr/Nariman Attia",
    subtitle: "Team Leader",
  },
  {
    id: 5,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Dr/Mohsen Hussein",
    subtitle: "Technical Manager",
  },
];

const initState = { instractourData };
const instractourInfoSlice = createSlice({
  name: "instractourInfo",
  initialState: initState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { id } = instractourInfoSlice.actions;

export default instractourInfoSlice.reducer;