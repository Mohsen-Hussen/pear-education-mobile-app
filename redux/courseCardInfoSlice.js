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
    courseLessons: "25 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  },
  {
    id: 2,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Mohsen Hussein",
    courseName: "HR Mangement",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + HR Mangement",
    courseDutation: "7 Hours",
    categoryName: "Hr",
    courseLessons: "70 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 3,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Ahmed Talat",
    courseName: "Frontend Track",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Frontend Track",
    courseDutation: "5 Hours",
    categoryName: "Tech",
    courseLessons: "118 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 4,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Aya",
    courseName: "Backend Track",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Backend Track",
    courseDutation: "6 Hours",
    categoryName: "Development",
    courseLessons: "425 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 5,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Doaa",
    courseName: "JavaScript",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + JavaScript",
    courseDutation: "48 Hours",
    categoryName: "Sales",
    courseLessons: "24 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 6,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Khoulud",
    courseName: "React Js",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + React Js",
    courseDutation: "45 Hours",
    categoryName: "Web",
    courseLessons: "41 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 7,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Mostafa ElShaeer",
    courseName: "Redux",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Redux",
    courseDutation: "14 Hours",
    categoryName: "Graphic",
    courseLessons: "65 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 8,
    image: require("../assets/pearImages/all-course-2.png"),
    instractourName: "By Dr/Marwa Osama",
    courseName: "Angular",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Angular",
    courseDutation: "39 Hours",
    categoryName: "Accounting",
    courseLessons: "254 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 9,
    image: require("../assets/pearImages/all-course-3.png"),
    instractourName: "By Dr/Nariman Attia",
    courseName: "Vue JS",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + Vue JS",
    courseDutation: "256 Hours",
    categoryName: "Machine Learning",
    courseLessons: "258 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

  },
  {
    id: 10,
    image: require("../assets/pearImages/all-course-1.png"),
    instractourName: "By Dr/Mohsen Hussein",
    courseName: "ASP.net core",
    courseDescription: "HR-Human Rescores Management Lorem Aps Leand + ASP.net core",
    courseDutation: "24 Hours",
    categoryName: "HR",
    courseLessons: "25 Lesson",
    IntroVideo: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

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