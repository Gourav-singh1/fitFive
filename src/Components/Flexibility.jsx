import React from "react";
import { Container, Row } from "react-bootstrap";
import Flexibile from "../assets/images/png/flexibile.png";
import YogaBg from "../assets/images/png/yoga-bg.png";
function Flexibility() {
  return (
    <>
      <section className="py-xl-5 d-flex align-items-center">
        <Container className="py-5">
          <Row>
            <div className="col-lg-5 mt-lg-5 pe-lg-0">
              <img
                data-aos="fade-right"
                data-aos-duration="800"
                className="w-100"
                src={Flexibile}
                alt="Flexibile"
              />
            </div>
            <div className="col-lg-7 ps-lg-0 position-relative">
              <img
                className="w-50 yoga_bg position-absolute end-0 bottom-0"
                src={YogaBg}
                alt="YogaBg"
              />
              <div className="bg_lightDark stability_box">
                <h2
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="900"
                  className="text-white index_1 fw_bold ff_inter fs_4xl"
                >
                  Flexibility
                </h2>
                <p
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  className="opacity_07 text-white index_1 fs_lg fw_regular ff_inter"
                >
                  Donec faucibus lectus ac lorem consectetur,
                </p>
                <span
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1100"
                  className="line_1 index_1 my-lg-5 my-4"
                ></span>
                <p
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  className="opacity_07 text-white index_1 fs_lg fw_regular ff_inter pb-4"
                >
                  Donec faucibus lectus ac lorem consectetur, a efficitur nisi
                  efficitur. Maecenas fermentum metus consequat dui auctor
                  semper. Suspendisse porta sem in lobortis tincidunt. Cras
                  libero mauris, egestas at euismod eu, pharetra ut enim. Cras
                  non turpis vitae est venenatis elementum non at
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Flexibility;
