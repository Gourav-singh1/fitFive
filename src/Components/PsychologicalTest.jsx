import React from "react";
import FitNav from "./FitNav";
import PhysiqueNav from "./PhysiqueNav";
function PsychologicalTest() {
  return (
    <>
      <section className="h_600px bg_Testhero">
        <PhysiqueNav />
        <div className="container mt-5 pt-5">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="ff_inter text-white fs_6xl fw_extrabold"
          >
            Psychological Test
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text_stone opacity_06 fw_regular fs_md ff_inter mw_470"
          >
            Porttitor nunc cras arcu nunc dictum adipiscing quam facilisi. Diam
            venenatis vitae placerat sed elit sagittis sit. Nunc nisl odio arcu
            donec.
          </p>
        </div>
      </section>
    </>
  );
}

export default PsychologicalTest;
