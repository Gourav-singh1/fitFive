import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhysiqueHeroImg from "../assets/images/webp/PhysiqueHeroImg.webp";
import ViewTranpBtn from "../Components/ViewWhiteBtn";
const PhysiqueHero = () => {
  return (
    <>
      <section
        style={{ overflowX: "hidden" }}
        className="flex-grow-1 py-4 d-flex BgScale_anim align-items-center Physique_hero position-realtive"
      >
        <Container id="Physique" className="w-100">
          <Row className="align-items-center justify-content-center justify-content-lg-between text-center text-lg-start flex-column-reverse flex-lg-row">
            <div className="col-xl-5 col-lg-6">
              <h3
                className="fs_5xl fw_extrabold text-white d-inline-block mb-4 ff_inter Physique_gradient"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Physique
              </h3>
              <p
                className="fs_md pt-xl-2 lh-lg fw_regular ff_inter opacity_07 pb-xl-2 mb-4 text-white"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <Link to="/Physique">
                <ViewTranpBtn />
              </Link>
            </div>
            <div className="col-lg-5 col-8">
              <div className="px-xl-5 mt-4 mt-lg-0">
                <img
                  className="PhysiqueHeroImg d-none d-lg-block"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  src={PhysiqueHeroImg}
                  alt="PhysiqueHeroImg"
                />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PhysiqueHero;
