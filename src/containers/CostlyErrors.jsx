import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Static Data Imports
import { staticContent } from "../staticContent";

//Component Imports
import TextComponent from "../components/Text/TextComponent";

//Image Imports
import CostlyErrorsImage from "../asserts/costlyErrors.svg";

export default function CostlyErrors() {
  const imgStyle = {
    height: "25vw",
    width: "fit-content",
  };

  const flexStyle = {
    columnGap: "8vw",
    margin: "2vw 14vw 2vw 5vw",
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
