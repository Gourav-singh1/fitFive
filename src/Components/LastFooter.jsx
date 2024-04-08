import React from "react";
import { Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/images/svg/pagelogo.svg";
function LastFooter() {
  return (
    <>
      <footer className="pt-5 pb-4 mt-sm-3 overflow-hidden">
        <Container>
          <div className="text-center">
            <img
              data-aos="fade-right"
              data-aos-duration="700"
              src={FooterLogo}
              alt="FooterLogo"
            />
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="pt-3 ff_poppins fw_regular fs_md text-white"
            >
              Condimentum duis fringilla tellus placerat viverra et.
              <span className="d-sm-block">Lectus vitae ac lobortis arcu.</span>
            </p>
          </div>
          <Row className="justify-content-lg-between pt-5 mt-4">
            <div className="col-6 col-md-4 col-lg-2">
              <ul className="ps-0" data-aos="fade-down" data-aos-duration="700">
                <li className="ff_inter fw_semibold fs_md text-white">Main</li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <ul
                className="ps-0"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="200"
              >
                <li className="ff_inter fw_semibold fs_md text-white">Help</li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Support
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2 pt-4 pt-md-0">
              <ul
                className="ps-0"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="400"
              >
                <li className="ff_inter fw_semibold fs_md text-white">Legal</li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Terms And Conditions
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Consumer’s Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2 pt-4 pt-lg-0">
              <ul
                className="ps-0"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="600"
              >
                <li className="ff_inter fw_semibold fs_md text-white">
                  Elements
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Spirit
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Mind
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Physique
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Recovery
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Nutrition
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2 pt-4 pt-lg-0">
              <ul
                className="ps-0"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="800"
              >
                <li className="ff_inter fw_semibold fs_md text-white">Shop</li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Categories
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="ff_inter fw_regular fs_md text-white nav_links"
                    href="#"
                  >
                    Latest
                  </a>
                </li>
              </ul>
            </div>
          </Row>
          <p className="pt-3 ff_poppins fw_regular fs_md text-white text-center">
            © FitFive 2022
          </p>
        </Container>
      </footer>
    </>
  );
}

export default LastFooter;
