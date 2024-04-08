import React from "react";
import FitNav from "./FitNav";
import Rehabilitation from "./Rehabilitation";
import Mobility from "./Mobility";
import Strength from "./Strength";
import Functionality from "./Functionality";
import Restoration from "./Restoration";
import RecoveryHero from "./RecoveryHero";
import FitFAQ from "./FitFAQ";
import LastFooter from "./LastFooter";
import PhysiqueNav from "./PhysiqueNav";
function Recovery() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <div className="min_vh_xl_100 d-flex flex-column">
          <PhysiqueNav />
          <RecoveryHero />
        </div>
        <Rehabilitation />
        <Mobility />
        <Strength />
        <Functionality />
        <Restoration />
        <FitFAQ />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default Recovery;
