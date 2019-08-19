import React from "react";
import Logo from "./Logo";

function Header({ subHeader, title, children }) {
  return (
    <header>
      <Logo />
      <h1>{title}</h1>
      <h2>{subHeader}</h2>
      <p>{children}</p>
    </header>
  );
}

export default Header;
