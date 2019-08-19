import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Objective from "./components/Objective.js";
import { add, multiply } from "./math.js";
import Header from "./components/Header.js";

import "./styles.scss";

import { siteSettings, copyright } from "./config.js";

function App() {
  return (
    <div className="App">
      <Header
        title={`Hello Web21`}
        subHeader={`Composing Components, with Style!`}
      >
        {/* {siteSettings.title} */}
        Hey, this is the `props.children`!
      </Header>

      <h2>OBJECTIVES:</h2>
      <ul>
        <li>
          <Objective
            text={`use JavaScript modules to export and import components`}
          />
          <ul>
            <li>default exports: Use in Capitalized Components</li>
            <li>named exports (3 === {add(1, 2)})</li>
          </ul>
        </li>
        <li>
          demonstrate the ability to compose React components to build out a UI
        </li>
        <li>
          <Objective
            text={`describe props and how data flows in a React application`}
          />
          <ul>
            <li>passing state into props</li>
            <li>passing functions/callbacks into props</li>
          </ul>
        </li>
        <li>
          <Objective text={`pass props as dynamic data to a React component`} />
        </li>
        <li>
          <Objective text={`style react apps with CSS and SASS`} />
        </li>

        {/* <li>
          <Objective
            text={`this is a prop, give it some props :waves_hands:`}
          />
        </li> */}
      </ul>
      <footer>{copyright}</footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
