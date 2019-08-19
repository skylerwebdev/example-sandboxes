import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avenger";

import avengersData from "../data/avengersData";

import "./styles.css";
import DebugProps from "./components/DebugProps";

/*
pass data to components rendered by React Router via the render prop

*/

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li className="back-button" onClick={() => history.back()}>
          <span aria-label="back" role="img">
            👈🏼
          </span>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/avengers" activeClassName="activeNavButton">
            Avengers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/test/godzilla/destroy"
            activeClassName="activeNavButton"
          >
            Catzilla
          </NavLink>
        </li>
        <li>
          <NavLink to="/test/rosie" activeClassName="activeNavButton">
            Meow
          </NavLink>
        </li>
      </ul>

      <Route exact path="/" component={Home} />

      <Route path="/test/:catName/:task?" component={DebugProps} />

      {/* <Route exact path="/avengers" component={AvengersList} /> */}
      <Route
        exact
        path="/avengers"
        render={props => {
          console.log("avengers.props", props);
          return <AvengersList {...props} avengersList={avengersData} />;
        }}
      />
      <Route
        path="/avengers/:avengerId"
        render={props => {
          console.log("avengersId.props", props);
          return <Avenger {...props} avengersList={avengersData} />; // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
