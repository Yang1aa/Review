import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export default function UserRole(props) {
  const location = useLocation();
  const { isLogged } = useSelector((state) => state.userSlice);
  return (
    <div>
      {isLogged ? (
        props.children
      ) : (
        <Navigate to={"/login"} replace state={{ prePath: location.pathname }}></Navigate>
      )}
    </div>
  );
}
