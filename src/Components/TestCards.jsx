import React from "react";
import { Container, Row } from "react-bootstrap";
import TestCardsData from "./TestCardsData";
const TestCards = () => {
  return (
    <>
      <Container className="py-4 py-sm-5">
        <Row className="pt-xl-5">
          {TestCardsData.map((value) => (
            <div className="col-6 col-sm-4 col-xl-3 my-3">
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-offset="200"
                className="position-relative class_box"
              >
                <div className="overflow-hidden">
                  <img
                    className="w-100 card_classes"
                    src={value.img}
                    alt="SpeciImg1"
                  />
                </div>
                <div className="d-flex pt-1 justify-content-between align-items-center">
                  <p className="py-2 fs_xl fw_semibold ff_inter mb-0 text-white">
                    {value.Name}
                  </p>
                  <button className="border-0 bg-transparent">
                    <img src={value.TestTube} alt="cart" />
                  </button>
                </div>
                <p className="fs_md fw_regular ff_inter text-white opacity_07">
                  {value.Inst}
                </p>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TestCards;
