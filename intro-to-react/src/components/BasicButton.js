import React, { useState } from "react";

const BasicButton = props => {
  // const clickCount = props.clickCount; //|| 10;
  const [clickCount, setClickCount] = useState(0);

  console.log("clickCount", clickCount);
  return (
    <button onClick={() => setClickCount(clickCount + 1)}>
      Click me! I've been clicked {clickCount} times
      <br />
    </button>
  );
};

export default BasicButton;
