import React from "react";

//CSS Impot
import "./TextStyle.scss";

export default function TextComponent(props) {
  return (
    <div>
      <div className="container-col-style">
        <span className="small-head" style={{ color: `${props.fontColor}` }}>
          {props.textContent.mainHeadingText}
        </span>
        <span className="large-head">{props.textContent.headingText}</span>
        <span className="para-style">{props.textContent.paragraphText} </span>
      </div>
    </div>
  );
}
