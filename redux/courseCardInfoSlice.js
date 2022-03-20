import { createSlice } from "@reduxjs/toolkit";

const courseData = [
  {
    id: 1,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Ahmed Selim",
    courseName: "Supply Chain Mangement",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Supply Chain Mangement",
    courseDutation: "2 Hours",
    categoryName: "Soft Skills",
    courseLessons: "25 Lesson"
  },
  {
    id: 2,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Mohsen Hussein",
    courseName: "HR Mangement",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + HR Mangement",
    courseDutation: "7 Hours",
    categoryName: "Hr",
    courseLessons: "70 Lesson"
  },
  {
    id: 3,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Ahmed Talat",
    courseName: "Frontend Track",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Frontend Track",
    courseDutation: "5 Hours",
    categoryName: "Tech",
    courseLessons: "118 Lesson"
  },
  {
    id: 4,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Aya",
    courseName: "Backend Track",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Backend Track",
    courseDutation: "6 Hours",
    categoryName: "Development",
    courseLessons: "425 Lesson"
  },
  {
    id: 5,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Doaa",
    courseName: "JavaScript",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + JavaScript",
    courseDutation: "48 Hours",
    categoryName: "Sales",
    courseLessons: "24 Lesson"
  },
  {
    id: 6,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Khoulud",
    courseName: "React Js",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + React Js",
    courseDutation: "45 Hours",
    categoryName: "Web",
    courseLessons: "41 Lesson"
  },
  {
    id: 7,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Mostafa ElShaeer",
    courseName: "Redux",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Redux",
    courseDutation: "14 Hours",
    categoryName: "Graphic",
    courseLessons: "65 Lesson"
  },
  {
    id: 8,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Marwa Osama",
    courseName: "Angular",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Angular",
    courseDutation: "39 Hours",
    categoryName: "Accounting",
    courseLessons: "254 Lesson"
  },
  {
    id: 9,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Nariman Attia",
    courseName: "Vue JS",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Vue JS",
    courseDutation: "256 Hours",
    categoryName: "Machine Learning",
    courseLessons: "258 Lesson"
  },
  {
    id: 10,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Mohsen Hussein",
    courseName: "ASP.net core",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + ASP.net core",
    courseDutation: "24 Hours",
    categoryName: "HR",
    courseLessons: "25 Lesson"
  },
  {
    id: 11,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Ahmed Selim",
    courseName: "HTML / HTML5",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + HTML / HTML5",
    courseDutation: "223 Hours",
    categoryName: "Web",
    courseLessons: "456 Lesson"
  },
  {
    id: 12,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Ahmed Talat",
    courseName: "CSS / CSS3",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + CSS / CSS3",
    courseDutation: "457 Hours",
    categoryName: "Graphic",
    courseLessons: "47 Lesson"
  },
  {
    id: 13,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Aya",
    courseName: "React Native",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + React Native",
    courseDutation: "368 Hours",
    categoryName: "Machine Learning",
    courseLessons: "245 Lesson"
  },
  {
    id: 14,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Doaa",
    courseName: "Flutter",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Flutter",
    courseDutation: "102 Hours",
    categoryName: "Accounting",
    courseLessons: "102 Lesson"
  },
  {
    id: 15,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Khoulud",
    courseName: "Bootstrap",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Bootstrap",
    courseDutation: "478 Hours",
    categoryName: "Sales",
    courseLessons: "246 Lesson"
  },
  {
    id: 16,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Mostafa ElShaeer",
    courseName: "Graphic Design",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Graphic Design",
    courseDutation: "247 Hours",
    categoryName: "Soft Skills",
    courseLessons: "236 Lesson"
  },
  {
    id: 17,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Marwa Osama",
    courseName: "Machine Learning",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Machine Learning",
    courseDutation: "263 Hours",
    categoryName: "HR",
    courseLessons: "589 Lesson"
  },
  {
    id: 18,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Nariman Attia",
    courseName: "Sales",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Sales",
    courseDutation: "575 Hours",
    categoryName: "Web",
    courseLessons: "335 Lesson"
  },
];

const initState = { courseData };
const courseCardInfoSlice = createSlice({
  name: "courseCardInfo",
  initialState: initState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { id } = courseCardInfoSlice.actions;

export default courseCardInfoSlice.reducer;