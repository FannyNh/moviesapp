import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Homepage from "../../pages/HomePage";
import SingleMoviePage from "../../pages/SingleMoviePage";
import Navbar from "../Navbar";


const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/movie" exact component={SingleMoviePage}></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
