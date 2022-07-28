import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userApi from "./userApi";
import { userSlice } from "./useSlice";
import studentApi from "./studentApi";
const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    userSlice: userSlice.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, studentApi.middleware),
});
setupListeners(store.dispatch);
export default store;
