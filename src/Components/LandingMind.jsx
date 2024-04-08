import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Mindhro from "../assets/images/webp/MindRight.webp";
import Mindhro from "../assets/images/png/demomind.png";
import ViewTranpBtn from "../Components/ViewWhiteBtn";
const LandingMind = () => {
  return (
    <>
      <section id="Mind" className="py-xl-5 py-4 position-relative LandingMind_bg d-flex align-items-center min_vh_xl_100">
        <Container className="w-100 py-4 py-sm-5 d-flex align-items-center">
          <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-between text-center text-lg-start">
            <div className="col-lg-6 col-sm-8">
              <div className="">
                <img
                  className="landingMind_img d-none d-lg-block"
                   src={Mindhro}
                  alt="Mindhro"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h3
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="900"
                className="fs_5xl fw_extrabold text-white d-inline-block mb-4 ff_inter Mind_gradient"
              >
                Mind
              </h3>
              <p
                className="fs_md pt-xl-2 lh-lg fw_regular ff_inter opacity_07 pb-xl-2 mb-4 text-white"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="900"
                data-aos-delay="200"
              >
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <Link to="/Mind">
                <ViewTranpBtn />
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LandingMind;
