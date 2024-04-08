import React from "react";
import FitNav from "./FitNav";
import PhysiqueNav from "./PhysiqueNav";
function SpecialistsHero() {
  return (
    <>
      <section className="h_600px bg_Specialistshero">
        <PhysiqueNav />
        <div className="container mt-5 pt-5">
          <h1
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="900"
            className="ff_inter text-white fs_6xl fw_extrabold"
          >
            Specialists
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text_stone fw_regular fs_md ff_inter mw_470"
          >
            Et lectus accumsan amet laoreet enim sollicitudin sapien lorem
            scelerisque risus vel.
          </p>
        </div>
      </section>
    </>
  );
}

export default SpecialistsHero;
