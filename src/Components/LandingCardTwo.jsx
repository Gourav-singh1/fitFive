import React from "react";
import { Container, Row } from "react-bootstrap";
import article_1 from "../assets/images/webp/article_1.webp";
import article_2 from "../assets/images/webp/article_2.webp";
import article_3 from "../assets/images/webp/article_3.webp";
import calender_icon from "../assets/images/svg/calender.svg";
import Slider from "react-slick";

const LandingCardTwo = () => {
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
      <section className="py-5 my-md-5 overflow-hidden">
        <Container>
          <p
            data-aos-duration="800"
            data-aos-offset="200"
            data-aos="fade-down"
            className="ff_inter fw_bold fs_6xl text-white text-center pt-sm-4"
          >
            Specialists
          </p>
          <Slider {...settings}>
            <div
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="200"
              data-aos="flip-right"
              className="px-2 pt-4"
            >
              <div className="specialist_card">
                <img className="w-100" src={article_1} alt="esther_1" />
                <div className="d-flex align-items-center pt-3">
                  <img src={calender_icon} alt="calender_icon" />
                  <p className="ff_poppins mb-0 ps-3 text_Gray">02/03/2022</p>
                </div>
                <p className="ff_inter text-white fw_bold fs_lg mb-2 pt-4">
                  {" "}
                  Article Name
                </p>
                <p className="ff_inter fw_regular text-white opacity_06 mb-2">
                  Fermentum, malesuada diam ac enim dui dictumst cursus sit.
                </p>
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="200"
              data-aos="flip-right"
              className="px-2 pt-4"
            >
              <div className="specialist_card">
                <img className="w-100" src={article_2} alt="esther_1" />
                <div className="d-flex align-items-center pt-3">
                  <img src={calender_icon} alt="calender_icon" />
                  <p className="ff_poppins mb-0 ps-3 text_Gray">02/03/2022</p>
                </div>
                <p className="ff_inter text-white fw_bold fs_lg mb-2 pt-4">
                  {" "}
                  Article Name
                </p>
                <p className="ff_inter fw_regular text-white opacity_06 mb-2">
                  Fermentum, malesuada diam ac enim dui dictumst cursus sit.
                </p>
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos="flip-right"
              className="px-2 pt-4"
            >
              <div className="specialist_card">
                <img className="w-100" src={article_3} alt="esther_1" />
                <div className="d-flex align-items-center pt-3">
                  <img src={calender_icon} alt="calender_icon" />
                  <p className="ff_poppins mb-0 ps-3 text_Gray">02/03/2022</p>
                </div>
                <p className="ff_inter text-white fw_bold fs_lg mb-2 pt-4">
                  {" "}
                  Article Name
                </p>
                <p className="ff_inter fw_regular text-white opacity_06 mb-2">
                  Fermentum, malesuada diam ac enim dui dictumst cursus sit.
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default LandingCardTwo;
