import React, { useEffect } from "react";
import FitNav from "./FitNav";
import HomePageHero from "./HomePageHero";
import LastFooter from "./LastFooter";
import CurvedImg from "./CurvedImg";
import HomeSecondSection from "./HomeSecondSection";

const HomePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <section className="d-flex flex-column min_vh_xl_100">
          <FitNav />
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <HomePageHero />
          </div>
        </section>
        <HomeSecondSection />
        <CurvedImg />
        <div className="bg_primary">
          <LastFooter />
        </div>
      </div>
    </>
  );
};

export default HomePage;
