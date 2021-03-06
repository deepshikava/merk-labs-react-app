import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Static Data Imports
import { staticContent } from "../staticContent";

//Component Imports
import TextComponent from "../components/Text/TextComponent";

//Image Imports
import VerificationImage from "../asserts/verification.svg";

export default function Verification() {
  const imgStyle = {
    height: "20vw",
    width: "fit-content",
  };

  const flexStyle = {
    columnGap: "9vw",
    margin: "0 14vw 5vw 4vw",
  };
  return (
    <div>
      <div className="container-row-style" style={flexStyle}>
        <img
          src={VerificationImage}
          alt="verification"
          className="img-style"
          style={imgStyle}
        />
        <TextComponent
          textContent={staticContent.section_2}
          fontColor={variables.colorPink}
        />
      </div>
    </div>
  );
}
