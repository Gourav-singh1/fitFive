import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewTranpBtn from "../Components/ViewWhiteBtn";
function NutritionHero() {
  return (
    <>
      <section className="bg_NutritionHero BgScale_anim flex-grow-1 d-flex align-items-center py-sm-4 overflow-hidden">
        <Container id="Nutrition" className="w-100 py-4 py-xl-0">
          <Row className="align-items-center justify-content-center justify-content-lg-between text-center text-lg-start flex-column-reverse flex-lg-row">
            <div className="col-xl-5 col-lg-6">
              <h3
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos="fade-down"
                className="fs_5xl fw_extrabold text-white d-inline-block mb-4 ff_inter Nutrition_gradient"
              >
                Nutritions
              </h3>
              <p
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos="fade-right"
                className="fs_md pt-xl-2 lh-lg fw_regular ff_inter opacity_07 pb-xl-2 mb-4 text-white"
              >
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <Link to="/Nutrition">
                <ViewTranpBtn />
              </Link>
            </div>
            {/* <div className="col-lg-6 col-sm-8">
            <div className="mt-lg-0 mt-4 mb-4 mb-lg-0">
              <img
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos="zoom-out"
                className="w-100 anim"
                src={NutriHero}
                alt="PhysiqueHeroImg"
              />
            </div>
          </div> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NutritionHero;
