import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Static Data Imports
import { staticContent } from "../staticContent";

//Component Imports
import TextComponent from "../components/Text/TextComponent";

//Image Imports
import ScansImage from "../asserts/scans.png";

export default function Scans() {
  const Styles = {
    imgStyle: {
      height: "30vw",
      width: "fit-content",
    },
    flexStyle: {
      columnGap: "11vw",
      margin: "0 15vw 1vw 5vw",
    },
  };

  return (
    <div>
      <div className="container-row-style" style={Styles.flexStyle}>
        <div style={{ marginTop: "3vw" }}>
          <TextComponent
            textContent={staticContent.section_7}
            fontColor={variables.colorAquamarine}
          />
        </div>
        <img
          src={ScansImage}
          alt="Scans"
          className="img-style"
          style={Styles.imgStyle}
        />
      </div>
    </div>
  );
}
