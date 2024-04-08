import React from "react";
import FitNav from "./FitNav";
import PhysiqueNav from "./PhysiqueNav";
function Classes() {
  return (
    <>
      <section className="h_600px bg_Classeshero">
        <PhysiqueNav />
        <div className="container mt-5 pt-5">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="900"
            className="ff_inter text-white fs_6xl fw_extrabold"
          >
            Classes
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text_stone opacity_06 fw_regular fs_md ff_inter mw_470"
          >
            Et lectus accumsan amet laoreet enim sollicitudin sapien lorem
            scelerisque risus vel.
          </p>
        </div>
      </section>
    </>
  );
}

export default Classes;
