import React from "react";
import Adaptablity from "./Adaptablity";
import Balance from "./Balance";
import FitFAQ from "./FitFAQ";
import FitNav from "./FitNav";
import Independence from "./Independence";
import LastFooter from "./LastFooter";
import MindHero from "./MindHero";
import Patience from "./Patience";
import PhysiqueNav from "./PhysiqueNav";
import SelfControl from "./SelfControl";

function Mind() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <div className="min_vh_xl_100 d-flex flex-column">
          <PhysiqueNav />
          <MindHero />
        </div>
        <Balance />
        <Adaptablity />
        <SelfControl />
        <Patience />
        <Independence />
        <FitFAQ />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default Mind;
