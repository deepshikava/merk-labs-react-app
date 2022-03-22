import React from "react";

//CSS Imports
import "./Counting.scss";

//Component Imports
import MediumHeading from "../components/Text/MediumHeading";
import CountImage from "../asserts/count.png";
import { staticContent } from "../staticContent";

export default function Counting() {
  return (
    <div>
      <div className="counting-container-style">
        <div className="blur-style">
          <MediumHeading textContent={staticContent.section_1.headingText} />
          <p className="p-style">{staticContent.section_1.paragraphText}</p>
        </div>
        <img src={CountImage} alt="counting" className="img-style" />
      </div>
    </div>
  );
}
