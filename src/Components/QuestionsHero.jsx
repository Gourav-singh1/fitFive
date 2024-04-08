import React from "react";
import { Container, Row } from "react-bootstrap";

function QuestionsHero() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <div className="col-12 col-md-11 col-lg-9 col-xl-7">
              <p
                className="ff_inter fw_regular fs_md opacity_08 text-white text-center"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="100"
              >
                Tincidunt magna consequat lectus suscipit quis.
              </p>
              <h2
                className="ff_inter fw_extrabold fs_xl text-white text-center pt-2"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="200"
              >
                Malesuada dui in natoque neque eget et?
              </h2>
              <div className="d_grid pt-5 mt-2">
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="300"
                >
                  Diam eros
                </button>
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="400"
                >
                  Elementum, auctor
                </button>
                {/* <button className="ff_inter fw_regular fs_md text-white py-2 w-100  rounded-2 transition_3ms Odio_button Odio_hover"
                 data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="500">
                  Odio interdum
                </button> */}
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="500"
                >
                  Odio interdum
                </button>
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="600"
                >
                  Tincidunt eget
                </button>
                {/* <button className="ff_inter fw_regular fs_md text-white py-2 w-100  rounded-2 transition_3ms Odio_button Odio_hover" 
                 data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="700">
                  Scelerisque mi
                </button> */}
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="700"
                >
                  Scelerisque mi
                </button>
                {/* <button className="ff_inter fw_regular fs_md text-white py-2 w-100  rounded-2 transition_3ms Odio_button Odio_hover" 
                 data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="800">
                  Lacinia cras
                </button> */}
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="800"
                >
                  Lacinia cras
                </button>
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="900"
                >
                  Ante ut
                </button>
                {/* <button className="ff_inter fw_regular fs_md text-white py-2 w-100  rounded-2 transition_3ms Odio_button Odio_hover" 
                data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="1000">
                  Scelerisque mi
                </button> */}
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="1000"
                >
                  Scelerisque mi
                </button>
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 w-100 bg-transparent  rounded-2 transition_3ms add_border Diam_hover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="1100"
                >
                  Ante ut
                </button>
              </div>
            </div>
          </Row>
          <div className="text-center pt-5 mt-3">
            <button
              className="ff_inter fw_regular fs_md text-white py-2 px-4 bg_blue rounded-2 transition_3ms buy_hover buy_border"
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-delay="1200"
            >
              Next
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default QuestionsHero;
