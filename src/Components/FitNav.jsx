import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageLogo from "../assets/images/svg/pagelogo.svg";
const FitNav = () => {
  const [Fitnav, setFitnav] = useState(false);
  if (Fitnav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="py-4">
        <Container
        // data-aos="zoom-in"
        // data-aos-duration="1200"
        // data-aos-delay="3000"
        >
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <a href="#" className="d-inline-bloack">
                <img src={PageLogo} alt="PageLogo" />
              </a>
            </Link>
            <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex gap-4 align-items-center">
              <Link to="/Physique">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#Physique"
                  >
                    Physique
                  </a>
                </li>
              </Link>
              <Link to="/Mind">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#Mind"
                  >
                    Mind
                  </a>
                </li>
              </Link>
              <Link to="/Spirit">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#Spirit"
                  >
                    Spirit
                  </a>
                </li>
              </Link>
              <Link to="/Recovery">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#Recovery"
                  >
                    Recovery
                  </a>
                </li>
              </Link>
              <Link to="/Nutrition">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#Nutrition"
                  >
                    Nutrition
                  </a>
                </li>
              </Link>
            </ul>
            <a
              className="Nav_btn d-none d-lg-block text-white fs_md fw_semibold ff_poppins"
              href="#"
            >
              Log In
            </a>
            <button
              onClick={() => setFitnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${Fitnav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-lg-none">
              <button
                onClick={() => setFitnav(false)}
                className="btn btn-close btn-close-white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <Link to="/Physique">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                      href="#Physique"
                    >
                      Physique
                    </a>
                  </li>
                </Link>
                <Link to="/Mind">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                      href="#Mind"
                    >
                      Mind
                    </a>
                  </li>
                </Link>
                <Link to="/Spirit">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                      href="#Spirit"
                    >
                      Spirit
                    </a>
                  </li>
                </Link>
                <Link to="/Recovery">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                      href="#Recovery"
                    >
                      Recovery
                    </a>
                  </li>
                </Link>
                <Link to="/Nutrition">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                      href="#Nutrition"
                    >
                      Nutrition
                    </a>
                  </li>
                </Link>
              </ul>
              <a
                onClick={() => setFitnav(false)}
                className="Nav_btn text-white fs_md fw_semibold ff_poppins"
                href="#"
              >
                Log In
              </a>
            </div>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default FitNav;
