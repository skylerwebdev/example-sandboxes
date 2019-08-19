import React, { useState } from "react";

export const useInput = (initialValue, debugName) => {
  console.log(`useInput:start:${debugName}`);
  const [value, setValue] = useState(initialValue);
  const handleChanges = event => {
    console.log(`useInput:changed:${debugName}`, event.target.value);
    setValue(event.target.value);
  };
  console.log(`useInput:end:${debugName}`);
  return [value, setValue, handleChanges];
};
