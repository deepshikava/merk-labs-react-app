import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Component Imports
import EasyIntegrationImage from "../asserts/easyIntegration.png";
import { staticContent } from "../staticContent";
import TextComponent from "../components/Text/TextComponent";

export default function EasyIntegration() {
  const imgStyle = {
    height: "25vw",
    width: "fit-content",
  };

  const flexStyle = {
    columnGap: "7vw",
    margin: "2vw 8vw 1vw 7vw",
  };
  return (
    <div>
      <div className="container-row-style" style={flexStyle}>
        <img
          src={EasyIntegrationImage}
          alt="Easy_Integration"
          className="img-style"
          style={imgStyle}
        />
        <TextComponent
          textContent={staticContent.section_6}
          fontColor={variables.colorYellow}
        />
      </div>
    </div>
  );
}
