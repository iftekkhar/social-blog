import React from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Single from "./Components/Single/Single";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Blog />
        </Route>
        <Route path="/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
