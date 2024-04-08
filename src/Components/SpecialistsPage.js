import React from "react";
import LastFooter from "./LastFooter";
import SpecialistsHero from "./SpecialistsHero";
import SpecialistsCards from "./SpecialistsCards";

function SpecialistsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <SpecialistsHero />
        <SpecialistsCards />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default SpecialistsPage;
