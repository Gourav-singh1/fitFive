import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import men from "../assets/images/svg/exercise_men.svg";
function Health() {
  return (
    <>
      <section
        id="Move"
        className="Health_section py-5 my-xl-5 position-relative"
      >
        <div className="glow position-absolute translate-middle"></div>
        <img
          className="position-absolute  health_image translate-middle"
          src={men}
          alt="men"
        />
        <Container>
          <Row className="justify-content-end pb-4 pt-5 mt-5 pb-lg-0">
            <div className="col-6">
              <h3
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-offset="200"
                className="ff_inter fs_3xl fw_semibold text-white d-inline-block  mb-0 Physique_image ms-lg-5 index_1"
              >
                <Link to="/Physique">
                  <span className="cursor_pointer button_hover text-white Physique_gradient d-inline-block px-4 text_shadow_unset">
                    Physique
                  </span>
                </Link>
              </h3>
            </div>
            <div className="col-6 col-lg-12 text-end text-lg-start  translateY_lg_n_20">
              <h3
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-offset="200"
                className="ff_inter fs_3xl fw_semibold text-white d-inline-block mb-0 MindBottom_image"
              >
                <Link to="/Mind">
                  <span className=" cursor_pointer text-white d-inline-block button_hover Mind_gradient text_shadow_unset">
                    Mind
                  </span>
                </Link>
              </h3>
            </div>
          </Row>
          <Row className="justify-content-lg-end justify-content-center">
            <div className="col-md-9 col-lg-6 col-xxl-5">
              <h2
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-offset="200"
                className="ff_inter fw_bold fs_3xl index_1 text-white text-center ps-xl-5 ms-xl-2"
              >
                “Individualized health plans to enrich your experience”
              </h2>
            </div>
          </Row>
          <Row className="pt-2 pt-lg-5">
            <div className="col-12 pt-lg-5 text-center text-lg-start pt-5 mt-4 pt-lg-0 mt-lg-0">
              <h3
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-offset="200"
                className="ff_inter position-relative fw_bold fs_3xl text-white d-inline-block SpiritBottom_image rotate_n_45 "
              >
                <Link to="/Spirit">
                  <span className="cursor_pointer text-white button_hover px-3 Spirit_gradient text_shadow_unset  d-inline-block">
                    Spirit
                  </span>
                </Link>
              </h3>
            </div>
          </Row>
          <Row className="pt-5">
            <div className="col-6 col-lg-10 text-lg-end">
              <h3
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-offset="200"
                className="ff_inter fw_bold fs_3xl text-white d-inline-block RecoveryTop_image"
              >
                <Link to="/Recovery">
                  <span className="cursor_pointer text-white button_hover Recovery_gradient text_shadow_unset px-2 d-inline-block">
                    Recovery
                  </span>
                </Link>
              </h3>
            </div>
            <div className="col-6 col-lg-10 offset-xl-2 offset-lg-1 pt-lg-2 pt-lg-5 text-end text-lg-start">
              <h3
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-offset="200"
                className="ff_inter fw_bold fs_3xl text-white d-inline-block mb-4 NutritionsTop_image r"
              >
                <Link to="/Nutrition">
                  <span className="px-2 text-white cursor_pointer button_hover Nutrition_gradient text_shadow_unset d-inline-block">
                    Nutritions
                  </span>
                </Link>
              </h3>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Health;
