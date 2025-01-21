import React from "react";
import "./App.css"


type FloatingTextProps = {
  text: string;
};

const FloatingText: React.FC<FloatingTextProps> = ({ text }) => {
  return (
    <div className="floating-text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`letter ${char===" " ? "space" : ""}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default FloatingText;
