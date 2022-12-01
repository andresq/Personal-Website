import React from "react";
import "./WorkExample.css";

const WorkExample = ({
  imgSource,
  imgAlt,
  workTitle,
  workParagraph,
  workLink,
}) => {
  console.log(imgSource);
  return (
    <div className="workExample">
      <div className="workImage">
        <img src={imgSource} alt={imgAlt}></img>
      </div>
      <div className="workExplained">
        <h2>{workTitle}</h2>
        <p>{workParagraph}</p>
        <a href={workLink}>Code</a>
      </div>
    </div>
  );
};

export default WorkExample;
