import React from "react";

//CSS Imports
import "./ContainerStyles.scss";
import variables from "../variables.module.scss";

//Static Data Imports
import { staticContent } from "../staticContent";

//Component Imports
import TextComponent from "../components/Text/TextComponent";

//Image Imports
import Neon3Image from "../asserts/neon3.png";
import ScansImage from "../asserts/scans.png";

export default function Scans() {
  const Styles = {
    imgStyle: {
      height: "30vw",
      width: "fit-content",
    },
    neonImgStyle: {
      // height: "20vw",
      // width: "fit-content",
      background: "no-repeat",
      backgroundImage: `url(${Neon3Image})`,
      backgroundPosition: "25% -150%",
      backgroundSize: "30vw",
    },
    flexStyle: {
      columnGap: "11vw",
      margin: "0 15vw 1vw 5vw",
      // background: "no-repeat",
      // backgroundImage: `url(${Neon3Image})`,
      // backgroundPosition: "25% -150%",
      // backgroundSize: "30vw",
      // backgroundOrigin: "content-box",
    },
    flexContainerStyle: {
      display: "flex",
      justifyContent: "flex-start",
      flexFlow: "column nowrap",
      // gap: "0.5vw",
      // margin: " 1vw",
    },
  };

  return (
    <div>
      <div className="container-row-style" style={Styles.flexStyle}>
        <div>
          <TextComponent
            textContent={staticContent.section_7}
            fontColor={variables.colorNavyblue}
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
