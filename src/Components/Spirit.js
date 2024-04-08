import React from "react";
import Adventure from "./Adventure";
import Courage from "./Courage";
import Faith from "./Faith";
import FitFAQ from "./FitFAQ";
import Freedom from "./Freedom";
import LastFooter from "./LastFooter";
import PhysiqueNav from "./PhysiqueNav";
import Presence from "./Presence";
import SpiritHero from "./SpiritHero";

function Spirit() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <div className="min_vh_xl_100 d-flex flex-column bg_SpiritHeroright BgScale_anim">
          <PhysiqueNav />
          <SpiritHero />
        </div>
        <Faith />
        <Adventure />
        <Courage />
        <Presence />
        <Freedom />
        <FitFAQ />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default Spirit;
