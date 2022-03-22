import { createSlice } from "@reduxjs/toolkit";

const teachersData = [
  {
    id: 1,
    image: require("../assets/pearImages/all-course-4.png"),
    name: "Mr.Mohamed Enab",
    subject: "Math",
    numOfStudents: "30",
    numOfCourses: "7",
    rating: 3
  },
  {
    id: 2,
    image: require("../assets/pearImages/all-course-3.png"),
    name: "Mr.Mohamed Abd elkader",
    subject: "Physics",
    numOfStudents: "20",
    numOfCourses: "5",
    rating: 2
  },
  {
    id: 3,
    image: require("../assets/pearImages/all-course-2.png"),
    name: "Mr.Mohsen Hussein",
    subject: "Math",
    numOfStudents: "70",
    numOfCourses: "4",
    rating: 4
  },
  {
    id: 4,
    image: require("../assets/pearImages/all-course-1.png"),
    name: "Mr.Fathi ElMasri",
    subject: "Math",
    numOfStudents: "30",
    numOfCourses: "5",
    rating: 2.5
  },
  {
    id: 5,
    image: require("../assets/pearImages/all-course-4.png"),
    name: "Mr.Mohamed Elzayat",
    subject: "English",
    numOfStudents: "457",
    numOfCourses: "9",
    rating: 5
  },
  {
    id: 6,
    image: require("../assets/pearImages/all-course-3.png"),
    name: "Mr.Ahmed Tallat",
    subject: "English",
    numOfStudents: "80",
    numOfCourses: "6",
    rating: 3
  },
  {
    id: 7,
    image: require("../assets/pearImages/all-course-2.png"),
    name: "Mr.Mostafa Elshaeer",
    subject: "Arabic",
    numOfStudents: "30",
    numOfCourses: "5",
    rating: 2.5
  },
  {
    id: 8,
    image: require("../assets/pearImages/all-course-1.png"),
    name: "Mr.Mohamed Elbably",
    subject: "History",
    numOfStudents: "203",
    numOfCourses: "9",
    rating: 5
  },
  {
    id: 9,
    image: require("../assets/pearImages/all-course-4.png"),
    name: "Miss.Aya",
    subject: "Chimestry",
    numOfStudents: "908",
    numOfCourses: "14",
    rating: 5
  },
  {
    id: 10,
    image: require("../assets/pearImages/all-course-3.png"),
    name: "Miss.Doaa",
    subject: "Biology",
    numOfStudents: "324",
    numOfCourses: "6",
    rating: 4
  },
  {
    id: 11,
    image: require("../assets/pearImages/all-course-2.png"),
    name: "Mr.Mohamed Enab",
    subject: "Math",
    numOfStudents: "798",
    numOfCourses: "69",
    rating: 3.5
  },
  {
    id: 12,
    image: require("../assets/pearImages/all-course-1.png"),
    name: "Mr.Mohamed Abd elkader",
    subject: "Physics",
    numOfStudents: "357",
    numOfCourses: "8",
    rating: 4.5
  },
  {
    id: 13,
    image: require("../assets/pearImages/all-course-4.png"),
    name: "Mr.Mohsen Hussein",
    subject: "Math",
    numOfStudents: "6954",
    numOfCourses: "36",
    rating: 3
  },
  {
    id: 14,
    image: require("../assets/pearImages/all-course-3.png"),
    name: "Mr.Fathi ElMasri",
    subject: "Math",
    numOfStudents: "3657",
    numOfCourses: "59",
    rating: 5
  },
  {
    id: 15,
    image: require("../assets/pearImages/all-course-2.png"),
    name: "Mr.Mohamed Elzayat",
    subject: "English",
    numOfStudents: "32659",
    numOfCourses: "56",
    rating: 4.5
  },
  {
    id: 16,
    image: require("../assets/pearImages/all-course-1.png"),
    name: "Mr.Ahmed Tallat",
    subject: "English",
    numOfStudents: "12487",
    numOfCourses: "102",
    rating: 4
  },
  {
    id: 17,
    image: require("../assets/pearImages/all-course-4.png"),
    name: "Mr.Mostafa Elshaeer",
    subject: "Arabic",
    numOfStudents: "2568",
    numOfCourses: "264",
    rating: 3
  },
  {
    id: 18,
    image: require("../assets/pearImages/all-course-3.png"),
    name: "Mr.Mohamed Elbably",
    subject: "History",
    numOfStudents: "1657",
    numOfCourses: "625",
    rating: 5
  },
  {
    id: 19,
    image: require("../assets/pearImages/all-course-2.png"),
    name: "Miss.Aya",
    subject: "Chimestry",
    numOfStudents: "6164",
    numOfCourses: "36",
    rating: 4.5
  },
  {
    id: 20,
    image: require("../assets/pearImages/all-course-1.png"),
    name: "Miss.Doaa",
    subject: "Biology",
    numOfStudents: "3654",
    numOfCourses: "36",
    rating: 2.5
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