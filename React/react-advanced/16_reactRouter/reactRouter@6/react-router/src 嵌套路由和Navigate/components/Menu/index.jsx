import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";
export default function Menu() {
  return (
    <div>
      <NavLink to={"/"} activestyle={{ textDecoration: "underline" }}>
        主页
      </NavLink>
      <br />
      <NavLink to={"/about"} activestyle={{ textDecoration: "underline" }}>
        关于
      </NavLink>
      <br />
      <NavLink to={"/student/1"} activestyle={{ textDecoration: "underline" }}>
        孙悟空
      </NavLink>
      <br />
      <NavLink to="/student/2" activestyle={{ textDecoration: "underline" }}>
        猪八戒
      </NavLink>
      <br />
      <NavLink to="/student/3" activestyle={{ textDecoration: "underline" }}>
        沙和尚
      </NavLink>
      <br />
      <NavLink to="/student/4" activestyle={{ textDecoration: "underline" }}>
        唐僧
      </NavLink>
    </div>
  );
}
