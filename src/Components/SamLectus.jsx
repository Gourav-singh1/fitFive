import React from "react";
import Sem_lectus_img from "../assets/images/webp/Sem_lectus.webp";
import ViewWhiteBtn from "./ViewWhiteBtn";
export const SamLectus = () => {
  return (
    <>
      <div className="container py-xl-5 my-5">
        <div className="row align-items-center justify-content-between flex-column flex-lg-row">
          <div className="col-lg-5">
            <img
              className="w-100 anim"
              src={Sem_lectus_img}
              alt="Sem_lectus_img"
            />
          </div>
          <div className="col-lg-6">
            <h2
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="900"
              className="ff_inter fw_bold fs_3xl text-white mt-4 mt-lg-0 text-center text-lg-start"
            >
              Sem lectus lacus, odio felis non gravida neque, pellentesque.
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="ff_inter fw_regular fs_md text_Gray mb-4 text-center text-lg-start"
            >
              Nisi accumsan ornare sit netus sem urna nullam est nunc. Fringilla
              condimentum facilisi nec dictum accumsan quis. Ac scelerisque
              congue tempus mollis purus eget. Fermentum feugiat sit vulputate
              nulla consequat at adipiscing in. Elementum sagittis mauris eget
              faucibus risus.
            </p>
            <div className="text-center text-lg-start">
              <ViewWhiteBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
