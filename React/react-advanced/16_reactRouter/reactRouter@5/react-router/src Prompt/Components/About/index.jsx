import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import AboutMessage from "./AboutMessage";
import InputForm from "../InputForm";
export default function About() {
  const { path } = useRouteMatch();
  return (
    <div>
      About
      <InputForm />
      <Route path={`${path}/aboutmessage`}>
        <AboutMessage />
      </Route>
    </div>
  );
}
