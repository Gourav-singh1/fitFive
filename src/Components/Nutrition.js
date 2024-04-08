import React from "react";
import Awareness from "./Awareness";
import EatSlow from "./EatSlow";
import Energy from "./Energy";
import Exploration from "./Exploration";
import FitFAQ from "./FitFAQ";
import LastFooter from "./LastFooter";
import NutritionHero from "./NutritionHero";
import PhysiqueNav from "./PhysiqueNav";
import SelfRestraint from "./SelfRestraint";
function Nutrition() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <div className="min_vh_xl_100 d-flex flex-column">
          <PhysiqueNav />
          <NutritionHero />
        </div>
        <Awareness />
        <Exploration />
        <SelfRestraint />
        <EatSlow />
        <Energy />
        <FitFAQ />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default Nutrition;
