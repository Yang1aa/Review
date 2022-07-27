import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function Profile() {
  const { isLogged } = useSelector((state) => state.userSlice);
  return (
    <div>
      {isLogged && <div>profile</div>}
      {!isLogged && <Navigate to={"/login"}></Navigate>}
    </div>
  );
}
