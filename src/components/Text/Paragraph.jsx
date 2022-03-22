import React from "react";
import "./TextStyle.scss";

export default function Paragraph(props) {
  return <div className="para-style">{props.textContent}</div>;
}
