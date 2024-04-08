import React from "react";
import RalphEdward from "../assets/images/png/RalphEdwards.png";
import { Container, Row } from "react-bootstrap";
import LocationIcon from "../assets/images/svg/LocationIcon.svg";
import Twitter from "../assets/images/svg/Twitter.svg";
import Instagram from "../assets/images/svg/Instagram.svg";
import Facebook from "../assets/images/svg/Facebook.svg";

function RalphEdwards() {
  return (
    <>
      <section className="flex-grow-1 d-flex align-items-center">
        <Container className="py-5">
          <Row className="justify-content-lg-between align-items-center">
            <div className="col-12 col-md-8 col-lg-5">
              <img
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-offset="200"
                className="w-100"
                src={RalphEdward}
                alt="Ralph_Edwards"
              />
            </div>
            <div className="col-12 col-lg-6 pt-4 pt-lg-0">
              <h2
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="ff_inter fs_3xl fw_bold text-white"
              >
                Ralph Edwards
              </h2>
              <p
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="ff_inter fw_regular fs_md text_Gray"
              >
                Fitness Specialist
              </p>
              <a
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="ff_inter fw_regular fs_md text-white"
                href="#"
              >
                <span className="pe-2">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                    src={LocationIcon}
                    alt="LocationIcon"
                  />
                </span>
                America
              </a>
              <div className="py-5 d-flex">
                <a
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-offset="200"
                  className="me-4"
                  href="#"
                >
                  <img
                    className="icon_hover transition_2ms"
                    src={Twitter}
                    alt="Twitter"
                  />
                </a>
                <a
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-offset="200"
                  className="me-4"
                  href="#"
                >
                  <img
                    className="icon_hover transition_2ms"
                    src={Instagram}
                    alt="Instagram"
                  />
                </a>
                <a
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-offset="200"
                  className="me-4"
                  href="#"
                >
                  <img
                    className="icon_hover transition_2ms"
                    src={Facebook}
                    alt="Facebook"
                  />
                </a>
              </div>
              <div className="d-flex">
                <div className="pe-3">
                  <h2
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    className="ff_inter fw_regular fs_md text-white mb-0"
                  >
                    Languages
                  </h2>
                  <p className="ff_inter fw_regular fs_md text_Gray">English</p>
                </div>
                <div className="ps-3">
                  <h2
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    className="ff_inter fw_regular fs_md text-white mb-0"
                  >
                    Education
                  </h2>
                  <p
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    className="ff_inter fw_regular fs_md text_Gray"
                  >
                    Biola University
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RalphEdwards;
