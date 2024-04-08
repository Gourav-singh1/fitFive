import React from 'react'
import { Container, Row } from "react-bootstrap";
import ViewTranspBtn from "./ViewTranspBtn.jsx";
import Self from "../assets/images/webp/SelfRestairent.webp";
import YogaBg from "../assets/images/png/yoga-bg.png";
function SelfRestraint() {
  return (
    <>
      <section className="py-xl-5 d-flex align-items-center">
        <Container className="py-5">
          <Row className="flex-column-reverse flex-lg-row">
             <div className="col-lg-7 pe-lg-0 position-relative">
              <img
                className="w-50 yoga_bg position-absolute start-0 bottom-0"
                src={YogaBg}
                alt="YogaBg"
              />
              <div className="bg_lightDark stability_box">
                <h2
                  data-aos="fade-right"
                  data-aos-duration="800"
                  className="text-white fw_bold ff_inter fs_4xl"
                >
                  Self-restraint
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="900"
                  className="opacity_07 text-white fs_lg fw_regular ff_inter pb-3"
                >
                  Donec faucibus lectus ac lorem consectetur,
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  className="opacity_07 text-white fs_lg fw_regular ff_inter pb-5"
                >
                  Donec faucibus lectus ac lorem consectetur, a efficitur nisi
                  efficitur. Maecenas fermentum metus consequat dui auctor
                  semper. Suspendisse porta sem in lobortis tincidunt. Cras
                  libero mauris, egestas at euismod eu, pharetra ut enim. Cras
                  non turpis vitae est venenatis elementum non at
                </p>

                <ViewTranspBtn />
              </div>
            </div>
            <div className="col-lg-5 mt-lg-5 ps-lg-0">
              <img
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1100"
                className="w-100"
                src={Self}
                alt="Aware"
              />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SelfRestraint