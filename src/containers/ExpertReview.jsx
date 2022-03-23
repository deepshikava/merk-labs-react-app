import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Static Data Imports
import { staticContent } from "../staticContent";

//Component Imports
import TextComponent from "../components/Text/TextComponent";

//Image Imports
import ExpertReviewImage from "../asserts/expertReview.svg";

export default function ExpertReview() {
  const imgStyle = {
    height: "28vw",
    width: "fit-content",
  };

  const flexStyle = {
    columnGap: "9vw",
    margin: "7vw 10vw 2vw 5vw",
  };

  return (
    <div>
      <div className="container-row-style" style={flexStyle}>
        <TextComponent
          textContent={staticContent.section_5}
          fontColor={variables.colorNavyblue}
        />
        <img
          src={ExpertReviewImage}
          alt="Expert_Review"
          className="img-style"
          style={imgStyle}
        />
      </div>
    </div>
  );
}
