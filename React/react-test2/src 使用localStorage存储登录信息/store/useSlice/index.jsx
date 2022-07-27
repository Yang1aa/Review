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
      };
    }
    return {
      user: JSON.parse(localStorage.getItem("user")),
      token: token,
      isLogged: true,
    };
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout(state, payload) {
      state.user = null;
      state.token = null;
      state.isLogged = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
export const { login, logout } = userSlice.actions;
