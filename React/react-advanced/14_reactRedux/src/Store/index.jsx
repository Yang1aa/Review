import { configureStore } from "@reduxjs/toolkit";
import { schoolReducer } from "./schoolSlice";
import { studentReducer } from "./studentSlice";

const store = configureStore({
  reducer: {
    student: studentReducer,
    school: schoolReducer,
  },
});
export default store;
