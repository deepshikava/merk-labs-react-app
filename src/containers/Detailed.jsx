import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Component Imports
import DetailedImage from "../asserts/detailed.svg";
import { staticContent } from "../staticContent";
import TextComponent from "../components/Text/TextComponent";

export default function Detailed() {
  const imgStyle = {
    height: "25vw",
    width: "fit-content",
    marginTop: "1vw",
  };

  const flexStyle = {
    columnGap: "13vw",
    margin: "2vw 9vw 1vw 7vw",
  };
  return (
    <div>
      <div className="container-row-style" style={flexStyle}>
        <img
          src={DetailedImage}
          alt="detailed"
          className="img-style"
          style={imgStyle}
        />
        <TextComponent
          textContent={staticContent.section_4}
          fontColor={variables.colorAquamarine}
        />
      </div>
    </div>
  );
}
