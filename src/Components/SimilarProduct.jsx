import React from "react";
import { Container, Row } from "react-bootstrap";
import SimiProductData from "./SimiProductData";
import Heart from "../assets/images/svg/like.svg";
import NextPagin from "../assets/images/svg/next-pagin.svg";
import PerverseIcon from "../assets/images/svg/PerverseIcon.svg";
const SimilarProduct = () => {
  return (
    <>
      <section className="py-xl-5">
        <Container className="py-5">
          <h2 className="fs_6xl text-white ff_inter fw_extrabold mb-lg-4">
            Similar Products
          </h2>
          <Row>
            {SimiProductData.map((value) => (
              <div className="col-6 col-sm-4 col-xl-3 my-3 my-xl-4">
                <div
                  data-aos-duration="800"
                  data-aos-delay="600"
                  data-aos-offset="200"
                  data-aos="flip-left"
                  className="position-relative class_box"
                >
                  <button className="border-0 bg-transparent position-absolute top-0 end-0 mt-2 me-2">
                    {" "}
                    <img
                      style={{ zIndex: 2, position: "relative" }}
                      className=""
                      src={Heart}
                      alt="Heart"
                    />
                  </button>
                  <div className="overflow-hidden">
                    <img
                      className="w-100 card_classes"
                      src={value.img}
                      alt="SpeciImg1"
                    />
                  </div>
                  <p className="py-2 fs_md fw_semibold ff_inter mb-0 text-white">
                    {value.product}
                  </p>
                  <p className="fs_md text_Gray fw_regular ff_inter">
                    {value.disc}
                  </p>
                  <div className="d-flex justify-content-between">
                    <p className="fs_md fw_semibold ff_inter text-white">
                      {value.Price}
                    </p>
                    <button className="border-0 bg-transparent">
                      <img src={value.cart} alt="cart" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Row>
          <Row className="justify-content-lg-center py-3 pt-lg-5 mt-lg-5">
            <div className="col-lg-5">
              <div className="d-flex pagination_btn justify-content-between rounded-3 border-white">
                <button className="bg-transparent text-white opacity_06 pagin_right_first w-100 py-2">
                  <img src={PerverseIcon} alt="PerverseIcon" />
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  1
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  ...
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  4
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  5
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  6
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  7
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  8
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  ...
                </button>
                <button className="ff-inter fw_regular fs_sm opacity_06 cursor_pointer text-white mb-0 w-100 py-2 pagin_right_1 bg-transparent ">
                  20
                </button>
                <button className="bg-transparent text-white opacity_06 pagin_right_last w-100 py-2">
                  <img src={NextPagin} alt="NextPagin" />
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SimilarProduct;
