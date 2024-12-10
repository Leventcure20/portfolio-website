import React from "react";
import "./Header.css";

function Header({ text }) {
    return (
      <h1 className="header">
        {text.split("").map((char, index) => (
          <span  key={index} className="jelly-char">
            {char === " " ? "\u00A0" : char} {/* Replace spaces with non-breaking spaces */}
          </span>
        ))}
      </h1>
    );
  }
  

export default Header;