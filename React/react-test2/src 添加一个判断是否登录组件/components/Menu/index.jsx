import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";
import { logout } from "../../store/useSlice";
export default function Menu() {
  const { isLogged } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          return isActive ? style.NavLink_style_active : style.NavLink_style;
        }}
      >
        主页
      </NavLink>
      <hr />
      {isLogged && (
        <>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => {
              return isActive
                ? style.NavLink_style_active
                : style.NavLink_style;
            }}
          >
            用户
          </NavLink>
          <hr />
          <NavLink
            to={"/"}
            className={() => {
              return style.NavLink_style;
            }}
            onClick={() => {
              dispatch(logout());
            }}
          >
            退出
          </NavLink>
          <hr />
        </>
      )}
      {!isLogged && (
        <>
          <NavLink
            to={"/login"}
            className={({ isActive }) => {
              return isActive
                ? style.NavLink_style_active
                : style.NavLink_style;
            }}
          >
            登录
          </NavLink>
          <hr />
        </>
      )}
    </div>
  );
}
