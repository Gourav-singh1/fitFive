import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Jenny from "../assets/images/svg/Jenny.svg";
import Wade from "../assets/images/svg/wade.svg";
import Stars from "../assets/images/svg/Stars.svg";
import next from "../assets/images/svg/next.svg";
import previous from "../assets/images/svg/previous.svg";
import Quotes from "../assets/images/svg/quotes.svg";
const LandingSlider = () => {
  const slider = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 mb-5 my-md-5 overflow-hidden">
        <Container className="py-lg-5 position-relative">
          <button
            onClick={() => slider.current.slickPrev()}
            className="bg-transparent position-absolute transform-middle-y border-0 prev"
          >
            <img src={previous} alt="previous" />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="bg-transparent position-absolute transform-middle-y ms-2 border-0 next"
          >
            <img src={next} alt="next" />
          </button>
          <Slider ref={slider} {...settings}>
            <div
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos-delay="400"
              data-aos="zoom-in"
              className="px-3"
            >
              <div className="d-flex px-4 rounded-2 position-relative pt-3 pb-4 bg_lightGray align-items-center justify-content-center flex-column">
                <img
                  className="position-absolute bottom-50% start-0 ms-2 pb-5 pb-sm-0 ms-sm-5 mb-5"
                  src={Quotes}
                  alt="Quotes"
                />
                <img src={Jenny} alt="Jenny" />
                <p className="fs_lg mb-0 fw_bold text-white ff_inter pt-2">
                  Jenny Wilson
                </p>
                <p className="fs_lg fw_regular text-white mb-0 pb-3 ff_inter opacity_07">
                  Medical Assistant
                </p>
                <img className="mb-1" src={Stars} alt="Stars" />
                <p className="pt-3 fs_lg fw_regular text-white text-center ff_inter opacity_07">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.{" "}
                </p>
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos="zoom-in"
              className="px-3"
            >
              <div className="d-flex position-relative px-4 rounded-2 pt-3 pb-4 bg_lightGray align-items-center justify-content-center flex-column">
                <img
                  className="position-absolute bottom-50% start-0 ms-2 pb-5 pb-sm-0 ms-sm-5 mb-5"
                  src={Quotes}
                  alt="Quotes"
                />
                <img src={Wade} alt="Wade" />
                <p className="fs_lg mb-0 fw_bold text-white ff_inter pt-2">
                  Wade Warren
                </p>
                <p className="fs_lg fw_regular text-white mb-0 pb-3 ff_inter opacity_07">
                  Medical Assistant
                </p>
                <img className="mb-1" src={Stars} alt="Stars" />
                <p className="pt-3 fs_lg fw_regular text-white text-center ff_inter opacity_07">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.{" "}
                </p>
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos="zoom-in"
              className="px-3"
            >
              <div className="d-flex position-relative px-4 rounded-2 pt-3 pb-4 bg_lightGray align-items-center justify-content-center flex-column">
                <img
                  className="position-absolute bottom-50% start-0 ms-2 pb-5 pb-sm-0 ms-sm-5 mb-5"
                  src={Quotes}
                  alt="Quotes"
                />
                <img src={Jenny} alt="Jenny" />
                <p className="fs_lg mb-0 fw_bold text-white ff_inter pt-2">
                  Jenny Wilson
                </p>
                <p className="fs_lg fw_regular text-white mb-0 pb-3 ff_inter opacity_07">
                  Medical Assistant
                </p>
                <img className="mb-1" src={Stars} alt="Stars" />
                <p className="pt-3 fs_lg fw_regular text-white text-center ff_inter opacity_07">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.{" "}
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default LandingSlider;
