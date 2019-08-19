import React from "react";

// ✅ function ButtonCounter({ incrementCount, count }) {
function ButtonCounter({ incrementCount, count }) {
  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default ButtonCounter;
