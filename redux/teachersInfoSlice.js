import { createSlice } from "@reduxjs/toolkit";

const teachersData = [
  {
    id: 1,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mohamed Enab",
    subject: "Math",
  },
  {
    id: 2,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Mohamed Abd elkader",
    subject: "Physics",
  },
  {
    id: 3,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mohsen Hussein",
    subject: "Math",
  },
  {
    id: 4,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Fathi ElMasri",
    subject: "Math",
  },
  {
    id: 5,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mohamed Elzayat",
    subject: "English",
  },
  {
    id: 6,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Ahmed Tallat",
    subject: "English",
  },
  {
    id: 7,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mostafa Elshaeer",
    subject: "Arabic",
  },
  {
    id: 8,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Mohamed Elbably",
    subject: "History",
  },
  {
    id: 9,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Miss.Aya",
    subject: "Chimestry",
  },
  {
    id: 10,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Miss.Doaa",
    subject: "Biology",
  },
  {
    id: 11,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mohamed Enab",
    subject: "Math",
  },
  {
    id: 12,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Mohamed Abd elkader",
    subject: "Physics",
  },
  {
    id: 13,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mohsen Hussein",
    subject: "Math",
  },
  {
    id: 14,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Fathi ElMasri",
    subject: "Math",
  },
  {
    id: 15,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mohamed Elzayat",
    subject: "English",
  },
  {
    id: 16,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Ahmed Tallat",
    subject: "English",
  },
  {
    id: 17,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Mr.Mostafa Elshaeer",
    subject: "Arabic",
  },
  {
    id: 18,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Mr.Mohamed Elbably",
    subject: "History",
  },
  {
    id: 19,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Miss.Aya",
    subject: "Chimestry",
  },
  {
    id: 20,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Miss.Doaa",
    subject: "Biology",
  },

];

const initState = { teachersData };
const teachersInfoSlice = createSlice({
  name: "teachersInfo",
  initialState: initState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { id } = teachersInfoSlice.actions;

export default teachersInfoSlice.reducer;