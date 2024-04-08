import React from "react";
import { Container, Row } from "react-bootstrap";
import esther_1 from "../assets/images/webp/esther_1.webp";
import esther_2 from "../assets/images/webp/esther_2.webp";
import esther_3 from "../assets/images/webp/esther_3.webp";
import Slider from "react-slick";
const LandingCardOne = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-4 py-sm-5 overflow-hidden">
        <Container>
          <p
            data-aos-duration="800"
            data-aos-offset="200"
            data-aos="fade-down"
            className="ff_inter fw_bold fs_6xl text-white text-center pt-lg-4"
          >
            Specialists
          </p>
          <Slider {...settings}>
            <div
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos="fade-up-right"
              className="px-2"
            >
              <div className="specialist_card">
                <img className="w-100" src={esther_1} alt="esther_1" />
                <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                  Esther Howard
                </p>
                <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                  Marketing Coordinator
                </p>
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="200"
              data-aos="fade-up-right"
              className="px-2"
            >
              <div className="specialist_card">
                <img className="w-100" src={esther_2} alt="esther_1" />
                <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                  Esther Howard
                </p>
                <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                  Marketing Coordinator
                </p>
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-offset="200"
              data-aos="fade-up-right"
              className="px-2"
            >
              <div className="specialist_card">
                <img className="w-100" src={esther_3} alt="esther_1" />
                <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                  Esther Howard
                </p>
                <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                  Marketing Coordinator
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default LandingCardOne;
