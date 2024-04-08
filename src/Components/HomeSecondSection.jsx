import React from "react";
import { Container, Row } from "react-bootstrap";
import mainLogo from "../assets/images/svg/mainLogo.svg";
import brain from "../assets/images/svg/brain.svg";
import form from "../assets/images/svg/form.svg";
import meditation from "../assets/images/svg/meditation.svg";
import run from "../assets/images/svg/run.svg";
import bed from "../assets/images/svg/bed.svg";
import brainLogo from "../assets/images/svg/brainLogo.svg";
import formLogo from "../assets/images/svg/formLogo.svg";
import runLogo from "../assets/images/svg/runLogo.svg";
import bedLogo from "../assets/images/svg/bedLogo.svg";
import mediLogo from "../assets/images/svg/mediLogo.svg";
import circleLine from "../assets/images/svg/circleLine.svg";
import Line from "../assets/images/svg/Line.svg";
const HomeSecondSection = () => {
  const move = () => {
    document.getElementById("Move").classList.add("scale");
  };
  return (
    <>
      <section className="my-md-5 second_secPadding">
        <Container className="pb-sm-5 pb-md-0">
          <Row className="align-items-center flex-column-reverse flex-xl-row justify-content-center pb-sm-5 pb-md-0">
            <div className="col-xl-7 d-flex justify-content-center justify-content-xl-start">
              <div
                id="Move"
                className="second_secBox text-center position-relative"
              >
                <img className="circleLine" src={circleLine} alt="circleLine" />
                <img className="mainLogo w-25" src={mainLogo} alt="mainLogo" />
                <div className="mindLogo_posi" onTouchMove={move}>
                  <div className="position-relative">
                    <img className="w-100" src={brain} alt="brain" />
                    <div className="brain_box">
                      <img
                        className="Brainlogo"
                        src={brainLogo}
                        alt="brainLogo"
                      />
                      <div className="brain_text text-center">
                        <img src={Line} alt="Line" />
                        <p className="fs_3xl fw_semibold ff_inter text-white text-center">
                          Mind
                        </p>
                        <p className="fs_xl ff_inter text-white text-center">
                          Sem nec eget est odio. Fames dolor turpis auctor non
                          commodo. In nullam ornare
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rest_posi">
                  <div className="position-relative">
                    <img className="w-100" src={bed} alt="bed" />
                    <div className="bed_box">
                      <img className="Brainlogo" src={bedLogo} alt="bedLogo" />
                      <div className="bed_text text-center">
                        <img src={Line} alt="Line" />
                        <p className="fs_3xl fw_semibold ff_inter text-white text-center">
                          Rest
                        </p>
                        <p className="fs_xl ff_inter text-white text-center">
                          Sem nec eget est odio. Fames dolor turpis auctor non
                          commodo. In nullam ornare
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div className="run_posi">
                  <div className="position-relative">
                    <img className="w-100" src={run} alt="run" />
                    <div className="run_box">
                      {" "}
                      <img className="run" src={runLogo} alt="runLogo" />
                      <div className="run_text text-center">
                        <img src={Line} alt="Line" />
                        <p className="fs_3xl fw_semibold ff_inter text-white text-center">
                          Physique
                        </p>
                        <p className="fs_xl ff_inter text-white text-center">
                          Sem nec eget est odio. Fames dolor turpis auctor non
                          commodo. In nullam ornare
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medi_posi">
                  <div className="position-relative">
                    <img className="w-100" src={meditation} alt="meditation" />
                    <div className="medi_box">
                      <img className="medi" src={mediLogo} alt="mediLogo" />
                      <div className="medi_text text-center">
                        <img src={Line} alt="Line" />
                        <p className="fs_3xl fw_semibold ff_inter text-white text-center">
                          Meditation
                        </p>
                        <p className="fs_xl ff_inter text-white text-center">
                          Sem nec eget est odio. Fames dolor turpis auctor non
                          commodo. In nullam ornare
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form_posi">
                  <div className="position-relative">
                    <img className="w-100" src={form} alt="form" />
                    <div className="form_box">
                      {" "}
                      <img className="form  " src={formLogo} alt="formLogo" />
                      <div className="form_text text-center">
                        <img src={Line} alt="Line" />
                        <p className="fs_3xl fw_semibold ff_inter text-white text-center">
                          Form
                        </p>
                        <p className="fs_xl ff_inter text-white text-center">
                          Sem nec eget est odio. Fames dolor turpis auctor non
                          commodo. In nullam ornare
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <p className="fs_3xl fw_bold ff_inter text-white text-center">
                “Providing you with effective tools and genuine care to
                facilitate your growth process”
              </p>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSecondSection;
