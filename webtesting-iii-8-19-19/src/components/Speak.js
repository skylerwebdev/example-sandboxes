import React from "react";

const Speak = props => {
  return (
    <>
      <button data-testid="speak" onClick={props.speak}>
        Speak
      </button>
      <div>{props.message}</div>
    </>
  );
};

export default Speak;
