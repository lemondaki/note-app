import React from "react";
import "../assets/GlobalStyle.scss";
const GlobalStyle = ({ children, toggleMode }) => {
  return (
    <div className={`${toggleMode && "dark-mode"}`}>
      <div className="container">{children}</div>;
    </div>
  );
};

export default GlobalStyle;
