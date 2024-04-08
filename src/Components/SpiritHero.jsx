import React from "react";
import { Container, Row } from "react-bootstrap";
import ViewTranpBtn from "../Components/ViewWhiteBtn";
function SpiritHero() {
  return (
    <>
      <section className="index_1 flex-grow-1 d-flex align-items-center py-4 overflow-hidden">
        <Container className="w-100">
          <Row className="align-items-center opacity-1 justify-content-center justify-content-lg-between text-center text-lg-start flex-column-reverse flex-lg-row">
            <div className="col-xl-5 col-lg-6">
              <h3
                data-aos="fade-down"
                data-aos-duration="1000"
                className="fs_5xl fw_extrabold text-white d-inline-block mb-4 ff_inter Spirit_gradient"
              >
                Spirit
              </h3>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                className="fs_md pt-xl-2 lh-lg fw_regular ff_inter opacity_07 pb-xl-2 mb-4 text-white"
              >
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <ViewTranpBtn />
            </div>
           
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SpiritHero;
