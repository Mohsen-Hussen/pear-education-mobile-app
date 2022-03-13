import { createSlice } from "@reduxjs/toolkit";

const ratingData = [
  {
    id: 1,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Student 1",
    opnion:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    rating: 2.5,
  },
  {
    id: 2,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Student 2",
    opnion:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    rating: 3,
  },
  {
    id: 3,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Student 3",
    opnion:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    rating: 4,
  },
  {
    id: 4,
    image: require("../assets/pearImages/stu-parent-03.png"),
    title: "Student 4",
    opnion:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    rating: 5,
  },
  {
    id: 5,
    image: require("../assets/pearImages/teacher_Default.png"),
    title: "Student 5",
    opnion:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    rating: 1,
  },
];

const initState = { ratingData };
const courseFeedbackSlice = createSlice({
  name: "courseFeedback",
  initialState: initState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { id } = courseFeedbackSlice.actions;

export default courseFeedbackSlice.reducer;