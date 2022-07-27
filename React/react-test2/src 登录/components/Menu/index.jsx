import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";
export default function Menu() {
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
      <NavLink
        to={"/profile"}
        className={({ isActive }) => {
          return isActive ? style.NavLink_style_active : style.NavLink_style;
        }}
      >
        用户
      </NavLink>
      <hr />
      <NavLink
        to={"/login"}
        className={({ isActive }) => {
          return isActive ? style.NavLink_style_active : style.NavLink_style;
        }}
      >
        登录
      </NavLink>
      <hr />
    </div>
  );
}
