import { configureStore } from "@reduxjs/toolkit";
import dnsCoursesInfoReducer from "./dnsCoursesInfoSlice";
import courseFeedbackReducer from "./courseFeedbackSlice";
import instractourInfoReducer from "./instractourInfoSlice";
import teachersInfoReducer from "./teachersInfoSlice";
import courseCardInfoReducer from "./courseCardInfoSlice";

const store = configureStore({
  reducer: {
    dnsCoursesInfo: dnsCoursesInfoReducer,
    courseFeedback: courseFeedbackReducer,
    instractourInfo: instractourInfoReducer,
    teachersInfo: teachersInfoReducer,
    courseCardInfo: courseCardInfoReducer,
  },
});

export default store;