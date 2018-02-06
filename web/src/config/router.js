import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../views/login/Login";

export const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
  </BrowserRouter>
);
