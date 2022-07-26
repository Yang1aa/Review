import React from "react";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <div>
      <NavLink
        to={"/"}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : null,
            fontSize: "16px",
            textDecoration: "none",
            color: "skyblue",
          };
        }}
      >
        主页
      </NavLink>
      <br />
      <NavLink
        to={"/about"}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : null,
            fontSize: "16px",
            textDecoration: "none",
            color: "skyblue",
          };
        }}
      >
        关于
      </NavLink>
      <br />
      <NavLink
        to={"/student/1"}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : null,
            fontSize: "16px",
            textDecoration: "none",
            color: "skyblue",
          };
        }}
      >
        孙悟空
      </NavLink>
      <br />
      <NavLink
        to="/student/2"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : null,
            fontSize: "16px",
            textDecoration: "none",
            color: "skyblue",
          };
        }}
      >
        猪八戒
      </NavLink>
      <br />
      <NavLink
        to="/student/3"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : null,
            fontSize: "16px",
            textDecoration: "none",
            color: "skyblue",
          };
        }}
      >
        沙和尚
      </NavLink>
      <br />
      <NavLink
        to="/student/4"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : null,
            fontSize: "16px",
            textDecoration: "none",
            color: "skyblue",
          };
        }}
      >
        唐僧
      </NavLink>
    </div>
  );
}
