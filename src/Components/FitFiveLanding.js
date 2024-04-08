import React from "react";
import FitNav from "./FitNav";
import LandingCardOne from "./LandingCardOne";
import LandingCardTwo from "./LandingCardTwo";
import LandingSlider from "./LandingSlider";
import LandingProducts from "./LandingProducts";
import PhysiqueHero from "./PhysiqueHero";
import FitFAQ from "./FitFAQ";
import LastFooter from "./LastFooter";
import RecoveryHero from "./RecoveryHero";
import NutritionHero from "./NutritionHero";
import LandingMind from "./LandingMind";
import LandingSpirit from "./LandingSpirit";
import Health from "./Health";
import HomeNav from "./HomeNav";

const FitFiveLanding = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <header className="d-flex flex-column min_vh_xl_100">
          <HomeNav />
          <section className="flex-grow-1 py-4 d-flex align-items-center">
            <PhysiqueHero />
          </section>
        </header>
        <LandingMind />
        <RecoveryHero />
        <LandingSpirit />
        <div className="py-4 py-sm-5 my-lg-5">
          <NutritionHero />
        </div>
        <LandingCardOne />
        <LandingSlider />
        <LandingProducts />
        <LandingCardTwo />
        <FitFAQ />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
};

export default FitFiveLanding;
