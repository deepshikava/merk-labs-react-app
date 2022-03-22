import React from "react";

//CSS Imports
import "./Verification.scss";
import variables from "../variables.module.scss";

//Component Imports
import VerificationImage from "../asserts/verification.png";
import { staticContent } from "../staticContent";
import TextComponent from "../components/Text/TextComponent";

export default function Verification() {
  console.log(variables.colorPink);
  return (
    <div>
      <div className="container-row-style">
        <img src={VerificationImage} alt="verification" className="img-style" />
        <div className="container-col-style">
          <TextComponent
            textContent={staticContent.section_2}
            fontColor={variables.colorPink}
          />
        </div>
      </div>
    </div>
  );
}
