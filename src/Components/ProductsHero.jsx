import React from "react";
import FitNav from "./FitNav";
import PhysiqueNav from "./PhysiqueNav";
function ProductsHero() {
  return (
    <>
      <section className="d-flex flex-column h_600px bg_Producthero">
        <PhysiqueNav />
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
          <div>
            <h1
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="ff_inter text-white fs_6xl fw_extrabold text-center"
            >
              Select your product here
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-white fw_regular fs_md ff_inter text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              tellus at sed vulputate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsHero;
