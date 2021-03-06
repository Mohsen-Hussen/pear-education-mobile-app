import { configureStore } from "@reduxjs/toolkit";
import dnsCoursesInfoReducer from "./dnsCoursesInfoSlice";
import courseFeedbackReducer from "./courseFeedbackSlice";
import instractourInfoReducer from "./instractourInfoSlice";
import teachersInfoReducer from "./teachersInfoSlice";
import courseCardInfoReducer from "./courseCardInfoSlice";
import loadingReducer from "./loadingSlice";
import loginReducer from "./userLoginStatus";
import enrolledReducer from "./isEnrolledStatusSlice";
import videoReducer from "./openVideoSlice";

const store = configureStore({
  reducer: {
    dnsCoursesInfo: dnsCoursesInfoReducer,
    courseFeedback: courseFeedbackReducer,
    instractourInfo: instractourInfoReducer,
    teachersInfo: teachersInfoReducer,
    courseCardInfo: courseCardInfoReducer,
    loading: loadingReducer,
    login: loginReducer,
    enrolled: enrolledReducer,
    openVideo: videoReducer,
  },
});

export default store;