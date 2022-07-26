import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import AboutMessage from "./AboutMessage";

export default function About() {
  const { path } = useRouteMatch();
  return (
    <div>
      About
      <Route path={`${path}/aboutmessage`}>
        <AboutMessage />
      </Route>
    </div>
  );
}
