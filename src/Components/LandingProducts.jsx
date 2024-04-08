import React from "react";
import { Container, Row } from "react-bootstrap";
import gummies from "../assets/images/webp/cbd_gummies.webp";
import lotion from "../assets/images/webp/cbd_lotion.webp";
import resilence from "../assets/images/webp/cbd_resilence.webp";
import working from "../assets/images/webp/girls_workingout.webp";
import shop from "../assets/images/svg/shop.svg";
import like from "../assets/images/svg/like.svg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const LandingProducts = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
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
        breakpoint: 468,
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
      <section className="bg_lightDark py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-offset="200"
              className="ff_inter fw_bold mb-0 fs_6xl text-white"
            >
              Products
            </p>
            <Link to="/Shop">
              <p
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-offset="200"
                className="ff_inter fw_regular mb-0 fs_lg text-white c_pointer viewall_button"
              >
                View All
              </p>
            </Link>
          </div>
          <Slider {...settings}>
            <div
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos="flip-left"
              className="px-2 mt-4 position-relative class_box"
            >
              <div className="overflow-hidden">
                {" "}
                <img
                  className="w-100 card_classes"
                  src={gummies}
                  alt="esther_1"
                />
              </div>
              <img
                className="position-absolute top_like end_like c_pointer"
                src={like}
                alt="like"
              />
              <p className="mb-2 mt-2 ff_inter fw_semibold fs_md text-white">
                Products Name
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="ff_inter fw_regular fs_md text_Gray">
                    Description
                  </p>
                  <p className="ff_inter fw_semibold fs_md text-white">
                    $10.00
                  </p>
                </div>
                <img className="c_pointer" src={shop} alt="shop" />
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="200"
              data-aos="flip-left"
              className="px-2 mt-4 position-relative class_box"
            >
              <div className="overflow-hidden">
                <img className="w-100 card_classes" src={lotion} alt="lotion" />
              </div>
              <img
                className="position-absolute top_like end_like c_pointer"
                src={like}
                alt="like"
              />
              <p className="mb-2 mt-2 ff_inter fw_semibold fs_md text-white">
                Products Name
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="ff_inter fw_regular fs_md text_Gray">
                    Description
                  </p>
                  <p className="ff_inter fw_semibold fs_md text-white">
                    $10.00
                  </p>
                </div>
                <img className="c_pointer" src={shop} alt="shop" />
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="200"
              data-aos="flip-left"
              className="px-2 mt-4 position-relative class_box"
            >
              <div className="overflow-hidden">
                <img
                  className="w-100 card_classes"
                  src={resilence}
                  alt="resilence"
                />
              </div>
              <img
                className="position-absolute top_like end_like c_pointer"
                src={like}
                alt="like"
              />
              <p className="mb-2 mt-2 ff_inter fw_semibold fs_md text-white">
                Products Name
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="ff_inter fw_regular fs_md text_Gray">
                    Description
                  </p>
                  <p className="ff_inter fw_semibold fs_md text-white">
                    $10.00
                  </p>
                </div>
                <img className="c_pointer" src={shop} alt="shop" />
              </div>
            </div>
            <div
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-offset="200"
              data-aos="flip-left"
              className="px-2 mt-4 position-relative class_box"
            >
              <div className="overflow-hidden">
                <img
                  className="w-100 card_classes"
                  src={working}
                  alt="working"
                />
              </div>
              <img
                className="position-absolute top_like end_like c_pointer"
                src={like}
                alt="like"
              />
              <p className="mb-2 mt-2 ff_inter fw_semibold fs_md text-white">
                Products Name
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="ff_inter fw_regular fs_md text_Gray">
                    Description
                  </p>
                  <p className="ff_inter fw_semibold fs_md text-white">
                    $10.00
                  </p>
                </div>
                <img className="c_pointer" src={shop} alt="shop" />
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default LandingProducts;
