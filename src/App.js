//Container Imports
import Dots from "./containers/Dots";
import Counting from "./containers/Counting";
import Verification from "./containers/Verification";
import CostlyErrors from "./containers/CostlyErrors";
import Detailed from "./containers/Detailed";
import ExpertReview from "./containers/ExpertReview";
import EasyIntegration from "./containers/EasyIntegration";
import Scans from "./containers/Scans";

//CSS Imports
import "./App.scss";

//Image Imports
import Neon1Image from "./asserts/neon_1.svg";
import Neon2Image from "./asserts/neon_2.svg";
import Neon3Image from "./asserts/neon_3.svg";

function App() {
  return (
    <>
      <Dots />
      <Counting />
      <div className="container-styling">
        <Verification />
        <img src={Neon1Image} alt="Neon_1" className="neon1-img-style" />
        <CostlyErrors />
      </div>
      <div className="container-styling">
        <Detailed />
        <img src={Neon2Image} alt="Neon_2" className="neon2-img-style" />
        <ExpertReview />
      </div>
      <div className="container-styling">
        <EasyIntegration />
        <img src={Neon3Image} alt="Neon_3" className="neon3-img-style" />
        <Scans />
      </div>
    </>
  );
}

export default App;
