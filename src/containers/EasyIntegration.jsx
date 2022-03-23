import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Static Data Imports
import { staticContent } from "../staticContent";

//Component Imports
import TextComponent from "../components/Text/TextComponent";

//Image Imports
import EasyIntegrationImage from "../asserts/easyIntegration.svg";

export default function EasyIntegration() {
  const imgStyle = {
    height: "30vw",
    width: "fit-content",
  };

  const flexStyle = {
    columnGap: "15wv",
    margin: "2vw 11vw 2vw 7vw",
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
