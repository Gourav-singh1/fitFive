import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageLogo from "../assets/images/svg/pagelogo.svg";
const PhysiqueNav = () => {
  const [Fitnav, setFitnav] = useState(false);
  if (Fitnav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="py-4">
        <Container>
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
                    href="#"
                  >
                    Physique
                  </a>
                </li>
              </Link>
              <Link to="/Mind">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#"
                  >
                    Mind
                  </a>
                </li>
              </Link>
              <Link to="/Spirit">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#"
                  >
                    Spirit
                  </a>
                </li>
              </Link>
              <Link to="/Recovery">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#"
                  >
                    Recovery
                  </a>
                </li>
              </Link>
              <Link to="/Nutrition">
                <li>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                    href="#"
                  >
                    Nutrition
                  </a>
                </li>
              </Link>
            </ul>

            <button
              onClick={() => setFitnav(true)}
              className="bg-transparent border-0 menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${Fitnav ? "show_aside" : "aside_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100">
              <div className="d-flex w-100 index_1 align-items-center position-sticky top-0 justify-content-between">
                <a width="100" className="d-inline-block mt-3 ms-2" href="#">
                  {" "}
                  <img width="200" src={PageLogo} alt="PageLogo" />
                </a>
                <button
                  onClick={() => setFitnav(false)}
                  className="btn btn-close btn-close-white fs-5 mt-4 me-4"
                ></button>
              </div>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <Link to="/Specialists">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Specialists
                    </a>
                  </li>
                </Link>
                <Link to="/Stability">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Stability
                    </a>
                  </li>
                </Link>
                <Link to="/SubSpecialists">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Sub-Specialists
                    </a>
                  </li>
                </Link>
                <Link to="/Shop">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Shop
                    </a>
                  </li>
                </Link>
                <Link to="/Classes">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Classes
                    </a>
                  </li>
                </Link>
                <Link to="/Physiological">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Physiological Test
                    </a>
                  </li>
                </Link>
                <Link to="/Questions">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Questions
                    </a>
                  </li>
                </Link>
                <Link to="/Calender">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Program Calender
                    </a>
                  </li>
                </Link>
                <Link to="/SingleProduct">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                </Link>
              </ul>
              <ul className="ps-0 mb-0 d-lg-none list-unstyled d-flex flex-column gap-4 align-items-center">
                <Link to="/Physique">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Physique
                    </a>
                  </li>
                </Link>
                <Link to="/Mind">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Mind
                    </a>
                  </li>
                </Link>
                <Link to="/Spirit">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Spirit
                    </a>
                  </li>
                </Link>
                <Link to="/Recovery">
                  <li onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Recovery
                    </a>
                  </li>
                </Link>
                <Link to="/Nutrition">
                  <li className="pb-3" onClick={() => setFitnav(false)}>
                    <a
                      className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                      href="#"
                    >
                      Nutrition
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default PhysiqueNav;
