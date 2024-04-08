import React from "react";
import { Container, Row } from "react-bootstrap";
// import Mindhro from "../assets/images/webp/MindRight.webp";
import Mindhro from "../assets/images/png/demomind.png";
import ViewTranpBtn from "../Components/ViewWhiteBtn";
function MindHero() {
  return (
    <>
      <section className="flex-grow-1 LandingMind_bg d-flex align-items-center position-relative">
        <Container className="w-100">
          <Row className="align-items-center justify-content-center justify-content-lg-between text-center text-lg-start flex-column-reverse flex-lg-row">
            <div className="col-xl-5 col-lg-6">
              <h3
                data-aos="fade-down"
                data-aos-duration="1000"
                className="fs_5xl fw_extrabold text-white d-inline-block mb-4 ff_inter Mind_gradient"
              >
                Mind
              </h3>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                className="fs_md pt-xl-2 lh-lg fw_regular ff_inter opacity_07 pb-xl-2 mb-4 text-white"
              >
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <ViewTranpBtn />
            </div>
            <div className="col-xl-7 col-lg-6 col-sm-8">
              <div className=" mt-4 mt-lg-0 mb-4 mb-lg-0">
                <img
                  className="Mindhero scale_anim d-none d-lg-block"
                  src={Mindhro}
                  alt="Mindhro"
                />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MindHero;
