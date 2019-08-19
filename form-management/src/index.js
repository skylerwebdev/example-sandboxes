import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SignupForm from "./SignupForm";

function App() {
  return (
    <div className="App">
      <h1>Hello Web21</h1>
      <SignupForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
