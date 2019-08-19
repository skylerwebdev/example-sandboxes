import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useDocumentTitle from "./components/useDocumentTitle.js";
import SignupForm from "./components/SignupForm.js";

import "./styles.css";

function App() {
  const [title, setTitle] = useState("");

  useDocumentTitle(title);

  return (
    <div className="App">
      <h1>Hello Web21</h1>
      <h2>Custom Hooks are Magic</h2>

      <h3>Objectives</h3>
      <ul>
        <li>
          define stateful logic: any case where you use state to change how your
          app renders.
        </li>
        <li>apply non-visual behavior (stateful logic) with custom hooks</li>
      </ul>
      <div>
        <button onClick={() => setTitle("Hello Web21")}>Hello</button>
      </div>
      <SignupForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
