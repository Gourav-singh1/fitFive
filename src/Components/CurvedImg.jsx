import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CurveVedio from "../assets/Video.m4v";
function CurvedImg() {
  return (
    <>
      <Container className="py-xl-5">
        <Row className="align-items-center py-4 py-md-5 text-center text-lg-start justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-md-8 position-relative">
            <video
              className="w-100"
              src={CurveVedio}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="col-lg-6">
            <h2
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-offset="200"
              className="text-white fs_6xl fw_extrabold ff_inter"
            >
              Why FITFIVE?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="200"
              className="fs_md fw_regular lh-lg opacity_06 mb-4 ff_inter text-white"
            >
              Consequat pellentesque nunc porttitor viverra accumsan, pharetra
              tempus. Sem consectetur lobortis nullam dignissim nulla volutpat,
              scelerisque felis. Condimentum duis fringilla tellus placerat
              viverra et. Lectus vitae ac lobortis arcu. Nulla posuere ac
              egestas aenean scelerisque.
            </p>
            <Link to="/HomePage">
              <button
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-offset="200"
                className="ff_inter fw_regular fs_md text-white py-2 px-4 bg-transparent  rounded-2 transition_3ms add_border add_hover"
              >
                Get Started
              </button>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CurvedImg;
