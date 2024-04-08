import React from "react";
import FitNav from "./FitNav";
import RalphEdwards from "./RalphEdwards";
import LastFooter from "./LastFooter";
import SubSpeciCards from "./SubSpeciCards";
import PhysiqueNav from "./PhysiqueNav";

const SubSpecialists = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <header className="min_vh_xl_100 d-flex flex-column">
          <PhysiqueNav />
          <RalphEdwards />
        </header>
        <SubSpeciCards />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
};

export default SubSpecialists;
