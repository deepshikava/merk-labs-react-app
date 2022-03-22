import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Component Imports
import CostlyErrorsImage from "../asserts/costlyErrors.png";
import { staticContent } from "../staticContent";
import TextComponent from "../components/Text/TextComponent";

export default function CostlyErrors() {
  const imgStyle = {
    height: "25vw",
    width: "fit-content",
  };

  const flexStyle = {
    columnGap: "8vw",
    margin: "0 14vw 1vw 5vw",
  };

  return (
    <div>
      <div className="container-row-style" style={flexStyle}>
        <TextComponent
          textContent={staticContent.section_3}
          fontColor={variables.colorYellow}
        />
        <img
          src={CostlyErrorsImage}
          alt="AvoidCostlyErrors"
          className="img-style"
          style={imgStyle}
        />
      </div>
    </div>
  );
}
