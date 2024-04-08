import React from "react";
import desert_grid from "../assets/images/webp/element_sub_category_grid.webp";

function StabilityGridDesert() {
  return (
    <>
      <div className="container my-lg-5 py-5">
        <p
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="900"
          className="text_light_gray fs_md ff_inter fw_regular text-center"
        >
          Eros amet amet, pellentesque orci platea dolor ultrices facilisi
          integer. Dui pharetra, porttitor luctus sit pretium porttitor platea
          diam ornare. Felis, ac pulvinar eu dolor viverra facilisis. Facilisis
          mi justo maecenas gravida justo a natoque id. Aliquam proin pharetra
          elementum diam. Adipiscing eu eu eu sit amet, tellus, cursus. Eleifend
          a facilisi eleifend nibh in mollis. Malesuada dui in ultrices natoque
          scelerisque neque eget et. At et.
        </p>
      </div>
      <div className="container">
        <div className="overflow-hidden class_box">
          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="800"
            data-aos-offset="200"
            className="w-100 card_classes"
            src={desert_grid}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default StabilityGridDesert;
