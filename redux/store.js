import { configureStore } from "@reduxjs/toolkit";
import dnsCoursesInfoReducer from "./dnsCoursesInfoSlice";
import courseFeedbackReducer from "./courseFeedbackSlice";

const store = configureStore({
  reducer: {
    dnsCoursesInfo: dnsCoursesInfoReducer,
    courseFeedback: courseFeedbackReducer,
  },
});

export default store;