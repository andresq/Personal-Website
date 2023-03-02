import React from "react";
import "./Intro.css";

const useHover = () => {
  const [hovering, setHovering] = React.useState(false);
  const onHoverFunctions = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverFunctions];
};

const Intro = () => {
  const [nameHovering, nameHoverFunctions] = useHover();
  const [fullstackHovering, fullstackHoverFunctions] = useHover();
  const [statementHovering, statementHoverFunctions] = useHover();
  const greetings = ["Hi,", "Hola,", "👋"];

  return (
    <div className="container">
      <div className="intro">
        <h1 {...nameHoverFunctions}>
          {nameHovering
            ? "serdnA m'I ,iH"
            : greetings[Math.floor(Math.random() * 3)] + " I'm Andres"}
        </h1>
        <h2 {...fullstackHoverFunctions}>
          {fullstackHovering ? "Full-Stack 🥞 Eater" : "Full-Stack Developer"}
        </h2>
        <h3 {...statementHoverFunctions}>
          {statementHovering
            ? "I enjoy breaking code, photography, and learning new things; feel free to connect with me."
            : "I enjoy writing code, photography, and learning new things; feel free to connect with me."}
        </h3>
      </div>
    </div>
  );
};

export default Intro;
