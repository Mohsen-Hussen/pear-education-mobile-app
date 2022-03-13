import { configureStore } from "@reduxjs/toolkit";
import dnsCoursesInfoReducer from "./dnsCoursesInfoSlice";

const store = configureStore({
  reducer: { dnsCoursesInfo: dnsCoursesInfoReducer },
});

export default store;