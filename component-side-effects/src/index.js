import React from "react";
import ReactDOM from "react-dom";
import PetGrid from "./components/PetGrid";
import ScrollWatch from "./components/ScrollWatch";

import "./styles.css";

/****
 * BREAKOUT TASK:
 * Find a semantic ui component to make this pretty
 * If you can't find off-the-shelf components
 *  - use styled-components & CSS
 * Look for inspiration on the component sites themselves
 *
 * Where/how did you find your component?
 *  - Examples?
 *  - Looking at list of options?
 *  - What was hard/easy?
 */

function App() {
  /*
  Get a random image: https://adorbs-as-a-service.herokuapp.com/api/v1/800w/600h/
  Project for random image service: https://github.com/justsml/adorbs-as-a-service
  */

  return (
    <div className="App">
      <h1>Advanced Styling in React</h1>
      <h2>⚠️ The internet is low on doggo photos!️</h2>
      {/* <ScrollWatch /> */}

      <ul>{/* <li /> */}</ul>
      <section>
        <b>Build a card list here!</b>
        <PetGrid limit={10} />
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
