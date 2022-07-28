import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "useSlice",
  initialState: () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return {
        user: null,
        token: null,
        isLogged: false,
        timeout: 0,
      };
    }
    return {
      user: JSON.parse(localStorage.getItem("user")),
      token: token,
      isLogged: true,
      timeout: +localStorage.getItem("timeout"),
    };
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
      const time = Date.now();
      state.timeout = time + 1000 * 60 * 60 * 24 * 7;
      // state.timeout = time + 1000 * 10;
      console.log("state.timeout", state.timeout);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("timeout", state.timeout + "");
    },
    logout(state, payload) {
      state.user = null;
      state.token = null;
      state.isLogged = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("timeout");
    },
  },
});
export const { login, logout } = userSlice.actions;
