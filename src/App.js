import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserPage from "./pages/user";
import Home from "./pages/home";
import "./main.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  );
}
