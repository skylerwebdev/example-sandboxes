import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ButtonCounter from "./ButtonCounter";

/*
create ButtonCounter to increment state 'count'
add function to reset count
add function to increment the count
*/

function App() {
  // ❌ Old way to store, and change data
  // var count = 0
  // var addToCount = number => count = count + number

  let [count, setCount] = useState(0);
  // count = 100; ❌

  // ProTip: Named helpers - adds description to the function/callback
  const resetCount = () => setCount(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <h1>Hello Web21</h1>
      <ButtonCounter count={count} incrementCount={incrementCount} />
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
