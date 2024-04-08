import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewTranpBtn from "../Components/ViewWhiteBtn";
const LandingSpirit = () => {
  return (
    <>
      <section
        id="Spirit"
        className="py-lg-5 index_1 flex-grow-1 py-4 py-sm-5 d-flex align-items-center overflow-hidden BgScale_anim bg_SpiritHeroleft"
      >
        <Container className="w-100 py-4 py-xl-5">
          <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-end text-center text-lg-start">
            <div className="col-lg-6">
              <h3
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos="zoom-in"
                className="fs_5xl fw_extrabold text-white d-inline-block mb-4 ff_inter Spirit_gradient"
              >
                Spirit
              </h3>
              <p
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos="fade-right"
                className="fs_md pt-xl-2 lh-lg fw_regular ff_inter opacity_07 pb-xl-2 mb-4 text-white"
              >
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <Link to="/Spirit">
                <ViewTranpBtn />
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LandingSpirit;
