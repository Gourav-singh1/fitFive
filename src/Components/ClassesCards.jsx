import React from "react";
import { Container, Row } from "react-bootstrap";
import ClassProductData from "./ClassProductData";
import playBtn from "../assets/images/svg/play-btn.svg";
const ClassesCards = () => {
  return (
    <>
      <section className="py-5">
        <Container className="pt-xl-5">
          <Row>
            {ClassProductData.map((value) => (
              <div className="col-6 col-sm-4 col-xl-3 my-3">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  className="position-relative class_box"
                >
                  <button className="border-0 position-absolute top-0 end-0 mt-3 me-4 bg-transparent">
                    {" "}
                    <img
                      style={{ zIndex: 2, position: "relative" }}
                      className=""
                      src={playBtn}
                      alt="playBtn"
                    />
                  </button>
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
                      <img src={value.cart} alt="cart" />
                    </button>
                  </div>
                  <p className="fs_md fw_regular ff_inter text-white opacity_07">
                    {value.Inst}
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fs_md fw_semibold mb-0 text-white ff_inter">
                      {value.min}
                    </p>
                    <img src={value.timer} alt="watch" />
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClassesCards;
