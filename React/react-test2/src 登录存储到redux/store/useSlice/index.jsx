import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "useSlice",
  initialState: {
    user: null,
    token: null,
    isLogged: false,
  },
  reducers: {
    login(state, payload) {
      // console.log("payload", payload);
      state.user = payload.user;
      state.token = payload.token;
      state.isLogged = true;
    },
    logout(state, payload) {
      // console.log("payload", payload);
      state.user = null;
      state.token = null;
      state.isLogged = false;
    },
  },
});
export const { login, logout } = userSlice.actions;
