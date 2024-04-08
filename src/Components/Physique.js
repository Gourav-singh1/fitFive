import React from "react";
import Endurance from "./Endurance";
import FitFAQ from "./FitFAQ";
import Flexibility from "./Flexibility";
import LastFooter from "./LastFooter";
import PhysiqueHero from "./PhysiqueHero";
import PhysiqueNav from "./PhysiqueNav";
import Speed from "./Speed";
import Stability from "./Stability";

function Physique() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <div className="min_vh_xl_100 d-flex flex-column">
          <PhysiqueNav />
          <PhysiqueHero />
        </div>
        <Stability />
        <Flexibility />
        <Endurance />
        <Speed />
        <FitFAQ />
        <div className="bg-black">
          {" "}
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default Physique;
