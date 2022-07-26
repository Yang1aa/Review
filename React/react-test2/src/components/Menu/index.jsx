import React from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>用户</Link>
    </div>
  );
}
