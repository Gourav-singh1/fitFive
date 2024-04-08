import React from "react";
import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FitFAQ = () => {
  return (
    <div>
      <section className="pb-md-5 overflow-hidden">
        <Container className="py-5 mb-lg-5">
          <Row className=" justify-content-center">
            <div className="col-12 col-md-11 col-xxl-8">
              <h1 className="ff_inter fs_6xl fw_bold text-white text-center">
                FAQs
              </h1>

              <Accordion defaultActiveKey="0" className="pt-4 pt-sm-5 mt-md-4">
                <Accordion.Item
                  eventKey="0"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="100"
                >
                  <Accordion.Header>
                    Q1. Nulla sem suspendisse crasut?
                  </Accordion.Header>
                  <Accordion.Body className="ff_inter fw_regular fs_md text_Gray pe-2 pe-md-5 me-xl-5">
                    Vestibulum maecenas auctor eleifend proin. Dictum vehicula
                    quis pretium tempus volutpat semper. Donec volutpat at
                    facilisis consequat venenatis.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="200"
                >
                  <Accordion.Header>
                    Q2. Libero nulla nisi, pretium, morbi donec lectus egestas?2
                  </Accordion.Header>
                  <Accordion.Body className="ff_inter fw_regular fs_md text_Gray pe-2 pe-md-5 me-xl-5">
                    Vestibulum maecenas auctor eleifend proin. Dictum vehicula
                    quis pretium tempus volutpat semper. Donec volutpat at
                    facilisis consequat venenatis.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="300"
                >
                  <Accordion.Header>
                    Q3. Tortor aliquam dignissim etiam in dignissim sapien?
                  </Accordion.Header>
                  <Accordion.Body className="ff_inter fw_regular fs_md text_Gray pe-2 pe-md-5 me-xl-5">
                    Vestibulum maecenas auctor eleifend proin. Dictum vehicula
                    quis pretium tempus volutpat semper. Donec volutpat at
                    facilisis consequat venenatis.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="400"
                >
                  <Accordion.Header>
                    Q4. Maecenas nunc nulla eu, cras pulvinar sit volutpat?
                  </Accordion.Header>
                  <Accordion.Body className="ff_inter fw_regular fs_md text_Gray pe-2 pe-md-5 me-xl-5">
                    Vestibulum maecenas auctor eleifend proin. Dictum vehicula
                    quis pretium tempus volutpat semper. Donec volutpat at
                    facilisis consequat venenatis.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="500"
                >
                  <Accordion.Header>
                    Q5. Elit at quisque at commodo malesuada diam sed?
                  </Accordion.Header>
                  <Accordion.Body className="ff_inter fw_regular fs_md text_Gray pe-2 pe-md-5 me-xl-5">
                    Vestibulum maecenas auctor eleifend proin. Dictum vehicula
                    quis pretium tempus volutpat semper. Donec volutpat at
                    facilisis consequat venenatis.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="5"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="600"
                >
                  <Accordion.Header>
                    Q6. Pharetra accumsan aliquet pellentesque eteu ultrices?
                  </Accordion.Header>
                  <Accordion.Body className="ff_inter fw_regular fs_md text_Gray pe-2 pe-md-5 me-xl-5">
                    Vestibulum maecenas auctor eleifend proin. Dictum vehicula
                    quis pretium tempus volutpat semper. Donec volutpat at
                    facilisis consequat venenatis.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FitFAQ;
