import React from "react";
import StabilityHero from "./StabilityHero";
import StabilityGridDesert from "./StabilityGridDesert";
import LastFooter from "./LastFooter";
import StabilityCards from "./StabilityCards";
import { SamLectus } from "./SamLectus";
const FitFive = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <StabilityHero />
        <StabilityGridDesert />
        <StabilityCards />
        <SamLectus />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
};

export default FitFive;
