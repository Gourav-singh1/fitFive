import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecoverHero from "../assets/images/webp/RecoveryHero.webp";
import ViewTranpBtn from "../Components/ViewWhiteBtn";
function RecoveryHero() {
  return (
    <>
      <section className="position-relative flex-grow-1 d-flex align-items-center py-4 PhysiqueHeroImg_bg">
        <Container id="Recovery" className="w-100 py-4 py-xl-0">
          <Row className="align-items-center justify-content-center justify-content-lg-between text-center text-lg-start flex-column-reverse flex-lg-row">
            <div className="col-xl-5 col-lg-6">
              <h3
                className="fs_5xl fw_extrabold text-white d-inline-block mb-4 ff_inter Recovery_gradient"
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="100"
              >
                Recovery
              </h3>
              <p
                className="fs_md pt-xl-2 lh-lg fw_regular ff_inter opacity_07 pb-xl-2 mb-4 text-white"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="200"
              >
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <Link to="/Recovery">
                <ViewTranpBtn />
              </Link>
            </div>
            <div className="col-lg-5 col-8">
              <div className="mt-4 mt-lg-0 mb-4 mb-lg-0 position-absolute top-50 end-0  translate-middle-y w-50 d-none d-lg-block">
                <img
                  className="w-100 scale_anim"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  src={RecoverHero}
                  alt="PhysiqueHeroImg"
                />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RecoveryHero;
