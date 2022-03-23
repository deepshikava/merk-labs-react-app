import React from "react";

//CSS Imports
import "./Count.scss";

//Static Data Imports
import { countData } from "../staticContent";

//Image Imports
import FrameImage from "../asserts/frame.png";
import dotDesignImage from "../asserts/dotDesign.svg";
import dotGlowImage from "../asserts/dotGlow.svg";

export default function Count() {
  const Styles = {
    frameStyle: {
      height: "30vw",
      width: "fit-content",
    },
    dotDesignStyle: {
      height: "25vw",
      width: "fit-content",
      position: "absolute",
      left: "3.6vw",
      top: "3vw",
    },
    dotGlowStyle: {
      height: "7vw",
      width: "fit-content",
      position: "absolute",
      left: "0.5vw",
      top: "0.5vw",
    },
    flexStyle: {
      position: "absolute",
      left: "3vw",
      top: "3vw",
      margin: "1vw 1vw 1vw 2vw",
    },
  };

  return (
    <div className="container-styling">
      <img
        src={FrameImage}
        alt="Frame"
        className="img-style"
        style={Styles.frameStyle}
      />
      <img
        src={dotDesignImage}
        alt="dotDesign"
        className="img-style"
        style={Styles.dotDesignStyle}
      />
      <img
        src={dotGlowImage}
        alt="dotGlowDesign"
        className="img-style"
        style={Styles.dotGlowStyle}
      />
      <div className="container-col-style" style={Styles.flexStyle}>
        {countData.map((data) => (
          <div>
            <div className="container-col-style">
              <span className="head-style">{data.countValue}</span>
              <span className="sub-text-style">{data.subText} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
