import React, { useState } from "react";

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        You clicked<span>{count}</span> times
      </p>
      <div className="button_container">
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(count * 5)}>Multiply by 5</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
