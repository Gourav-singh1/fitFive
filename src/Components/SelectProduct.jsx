import React from "react";
import { Container, Row } from "react-bootstrap";
import SelectProdData from "./SelectProdData";
import Heart from "../assets/images/svg/like.svg";
import NextPagin from "../assets/images/svg/next-pagin.svg";
import PerverseIcon from "../assets/images/svg/PerverseIcon.svg";
import { Link } from "react-router-dom";
const SelectProduct = () => {
  return (
    <>
      <section className="py-xl-5">
        <Container>
          <Row className="py-5">
            <div className="col-md-3 mt-3">
              <div className="d-md-none">
                <select
                  className="fs_md text-white py-1 px-2 rounded-2 bg-transparent fw_semibold ff_inter"
                  name=""
                  id=""
                >
                  <option selected hidden value="">
                    Shop By Category
                  </option>
                  <option
                    className="bg-transparent text-black fs_md ff_inter fw_regular"
                    value=""
                  >
                    Best Seller
                  </option>
                  <option
                    className="bg-transparent text-black fs_md ff_inter fw_regular"
                    value=""
                  >
                    New Released
                  </option>
                  <option
                    className="bg-transparent text-black fs_md ff_inter fw_regular"
                    value=""
                  >
                    Mover And Shakers
                  </option>
                  <option
                    className="bg-transparent text-black fs_md ff_inter fw_regular"
                    value=""
                  >
                    Category 4
                  </option>
                  <option
                    className="bg-transparent text-black fs_md ff_inter fw_regular"
                    value=""
                  >
                    Category 5
                  </option>
                  <option
                    className="bg-transparent text-black fs_md ff_inter fw_regular"
                    value=""
                  >
                    Category 6
                  </option>
                  <option
                    className="bg-transparent text-black fs_md ff_inter fw_regular"
                    value=""
                  >
                    Category 7
                  </option>
                </select>
              </div>
              <p
                data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="600"
                className="fs_md d-none d-md-block fw_semibold text-white mb-0 pb-3 ff_inter"
              >
                Shop By Category
              </p>
              <div className="d-none d-md-flex flex-column align-items-start">
                <button
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  className="border-0 mt-1 mb-3 bg-transparent fs_md text-white ff_inter fw_regular"
                >
                  Best Seller
                </button>
                <button
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  className="border-0 mt-1 mb-3 bg-transparent fs_md text-white ff_inter fw_regular"
                >
                  New Released
                </button>
                <button
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="900"
                  className="border-0 mt-1 mb-3 bg-transparent fs_md text-white ff_inter fw_regular"
                >
                  Mover And Shakers
                </button>
                <button
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  className="border-0 mt-1 mb-3 bg-transparent fs_md text-white ff_inter fw_regular"
                >
                  Category 4
                </button>
                <button
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="1100"
                  className="border-0 mt-1 mb-3 bg-transparent fs_md text-white ff_inter fw_regular"
                >
                  Category 5
                </button>
                <button
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  className="border-0 mt-1 mb-3 bg-transparent fs_md text-white ff_inter fw_regular"
                >
                  Category 6
                </button>
                <button
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="1300"
                  className="border-0 mt-1 mb-3 bg-transparent fs_md text-white ff_inter fw_regular"
                >
                  Category 7
                </button>
              </div>
            </div>
            <div className="col-md-9">
              <Row>
                {SelectProdData.map((value) => (
                  <div className="col-6 col-md-4 my-3 my-xl-4">
                    <Link to="/SingleProduct">
                      <div
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-aos-duration="800"
                        data-aos-offset="200"
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
                        <p
                          className="py-2 fs_md fw_semibold ff_inter mb-0 text-white"
                        >
                          {value.product}
                        </p>
                        <p
                          className="fs_md text_Gray fw_regular ff_inter"
                        >
                          {value.disc}
                        </p>
                        <div className="d-flex justify-content-between">
                          <p
                            className="fs_md fw_semibold ff_inter text-white"
                          >
                            {value.Price}
                          </p>
                          <button className="border-0 bg-transparent">
                            <img
                              src={value.cart}
                              alt="cart"
                            />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                <Row className="justify-content-lg-center py-3 pt-lg-5 mt-lg-5">
                  <div className="col-lg-5">
                    <div
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      data-aos-duration="800"
                      className="d-flex pagination_btn justify-content-between rounded-3 border-white"
                    >
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
                        <img src={NextPagin} alt="PerverseIcon" />
                      </button>
                    </div>
                  </div>
                </Row>
              </Row>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SelectProduct;
