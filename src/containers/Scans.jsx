import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Component Imports
import ScansImage from "../asserts/scans.png";
import { staticContent } from "../staticContent";
import TextComponent from "../components/Text/TextComponent";

export default function Scans() {
  const imgStyle = {
    height: "30vw",
    width: "fit-content",
  };

  const flexStyle = {
    columnGap: "10vw",
    margin: "0 15vw 1vw 5vw",
  };

  return (
    <div>
      <div className="container-row-style" style={flexStyle}>
        <TextComponent
          textContent={staticContent.section_7}
          fontColor={variables.colorNavyblue}
        />
        <img
          src={ScansImage}
          alt="Scans"
          className="img-style"
          style={imgStyle}
        />
      </div>
    </div>
  );
}
