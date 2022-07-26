import React from "react";
// import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import AboutMessage from "./AboutMessage";

export default function About() {
  return (
    <div>
      About
      {/* <Routes>
        <Route path="/aboutmessage" element={<AboutMessage />}></Route>
      </Routes> */}
      <Outlet />
    </div>
  );
}
