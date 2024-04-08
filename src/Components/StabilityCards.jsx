import React from "react";

import { Container, Row } from "react-bootstrap";
import StabiImg1 from "./StabilityCardsData";
const StabilityCards = () => {
  return (
    <>
      <section className="py-5">
        <Container className="py-xl-5">
          <p className="fs_6xl fw_extrabold text-white ff_inter text-center pb-4">
            Modules
          </p>
          <Row className="justify-content-center">
            {StabiImg1.map((value) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-offset="200"
                className="col-6 col-sm-4 col-xl-3 my-2"
              >
                <div className="class_box">
                  <div className="overflow-hidden">
                    <img
                      className="w-100 card_classes"
                      src={value.img}
                      alt="SpeciImg1"
                    />
                  </div>
                  <p className="py-md-3 py-2 fs_md fw_semibold ff_inter mb-0 text-white">
                    {value.heading}
                  </p>
                  <p className="fs_md fw_regular ff_inter mb-0 text_Gray">
                    {value.disc}
                  </p>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default StabilityCards;
