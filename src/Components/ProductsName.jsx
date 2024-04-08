import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import Products from "../assets/images/png/Products.png";
import Gray_Products from "../assets/images/png/Gray_Products.png";
import GreenProducts from "../assets/images/png/GreenProducts.png";
import BlackProducts from "../assets/images/png/BlackProducts.png";
import GemProducts from "../assets/images/png/GemProducts.png";

function ProductsName() {
  return (
    <>
      <section className="flex-grow-1 d-flex align-items-center">
        <Container className="py-5">
          <Row className="justify-content-lg-between align-items-center">
            <div className="col-12 col-md-8 col-lg-5">
              <img
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-delay="100"
                className="w-100"
                src={Products}
                alt="Products"
              />
              <Row className="pt-4">
                <div className="col-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="900"
                    data-aos-delay="200"
                    className="w-100 cursor_pointer hover_image transition_3ms"
                    src={Gray_Products}
                    alt="Gray_Products"
                  />
                </div>
                <div className="col-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="900"
                    data-aos-delay="300"
                    className="w-100 cursor_pointer hover_image transition_3ms"
                    src={GreenProducts}
                    alt="GreenProducts"
                  />
                </div>
                <div className="col-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="900"
                    data-aos-delay="400"
                    className="w-100 cursor_pointer hover_image transition_3ms"
                    src={BlackProducts}
                    alt="BlackProducts"
                  />
                </div>
                <div className="col-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="900"
                    data-aos-delay="500"
                    className="w-100 cursor_pointer hover_image transition_3ms"
                    src={GemProducts}
                    alt="GemProducts"
                  />
                </div>
              </Row>
            </div>
            <div className="col-12 col-lg-6 pt-4 pt-lg-0">
              <h2
                className="ff_inter fw_extrabold fs_6xl text-white"
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="100"
              >
                Products Name
              </h2>
              <p
                className="ff_inter fw_regular fs_md text-white pt-2"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="200"
              >
                Mauris
              </p>
              <h3
                className="ff_inter fw_bold fs_3xl text-white pt-2"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                $10.00
              </h3>
              <p
                className="ff_inter fw_regular fs_md text_Gray pt-2"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="400"
              >
                Donec massa orci, in nulla nulla. Leo tristique cursus
                adipiscing augue enim, accumsan massa sit. Nunc purus in nulla
                risus. Sodales congue vulputate donec dictum nunc semper
                faucibus. Adipiscing diam adipiscing enim mauris bibendum sed
                tortor et. Nulla egestas vestibulum sit diam vitae potenti
                elementum. Mattis integer nisl quis felis posuere cursus in duis
                mauris. Ipsum in massa dolor pellentesque. Amet sapien quis
                eleifend facilisis.
              </p>
              <div className="pt-4">
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 px-4 bg_blue rounded-2 transition_3ms buy_hover buy_border me-3"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="500"
                >
                  Buy Now
                </button>
                <button
                  className="ff_inter fw_regular fs_md text-white py-2 px-4 bg-transparent  rounded-2 transition_3ms add_border add_hover"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="600"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="pt-xl-5 mt-sm-5">
        <Container>
          <h2
            className="ff_inter fw_extrabold fs_6xl text-white"
            data-aos="fade-down"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            Description
          </h2>
          <p
            className="ff_inter fw_regular opacity_07 fs_md text_Gray pt-2"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
            mattis netus lorem nulla pretium. Dignissim lacus ipsum, mi, purus
            suspendisse tellus sit. Suspendisse mattis curabitur sed at id in.
            Nulla consequat nibh id auctor diam non turpis volutpat ultricies.
            Odio magna mi lacus, vitae purus. Habitasse ultrices metus, potenti
            erat bibendum in sed pellentesque tincidunt. Tristique mauris varius
            integer ac. Nisl ut diam felis dui ut vestibulum risus non. Lacinia
            vitae, cras arcu ultricies. Viverra massa nunc donec pellentesque
            aliquet non euismod ut nascetur. Duis varius venenatis, non volutpat
            bibendum nisl, mus tellus. Sed enim et faucibus nunc ac ut. Sed in
            justo, proin ornare nibh interdum aenean mattis arcu. Leo viverra
            volutpat nunc sed. Elit est mattis senectus iaculis laoreet. Libero
            at aliquam, et tristique eget sed. Eg
          </p>
        </Container>
      </section>
    </>
  );
}

export default ProductsName;
