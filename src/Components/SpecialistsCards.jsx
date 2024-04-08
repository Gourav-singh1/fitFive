import React from "react";
import { Container, Row } from "react-bootstrap";
import SpeciCardsData from "./SpeciCardsData";
const SpecialistsCards = () => {
  return (
    <>
      <section className="py-4 py-sm-5">
        <Container className="pt-xl-5">
          <Row>
            {SpeciCardsData.map((value) => (
              <div className="col-6 col-sm-4 col-xl-3 my-3 my-sm-4 my-xl-5">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  className="class_box"
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-100 card_classes"
                      src={value.img}
                      alt="SpeciImg1"
                    />
                  </div>
                  <p className="py-md-3 py-2 fs_md fw_semibold ff_inter mb-0 text-white">
                    {value.heading}
                  </p>
                  <p className="fs_md fw_regular ff_inter mb-0 text_Gray">
                    {value.disc}
                  </p>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SpecialistsCards;
