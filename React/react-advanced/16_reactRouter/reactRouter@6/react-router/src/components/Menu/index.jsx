import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";
export default function Menu() {
  return (
    <div>
      <NavLink to={"/"}>主页</NavLink>
      <NavLink to={"/about"}>关于</NavLink>
    </div>
  );
}
