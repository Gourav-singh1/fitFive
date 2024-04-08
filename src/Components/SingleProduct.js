import React from "react";
import FitFAQ from "./FitFAQ";
import FitNav from "./FitNav";
import LastFooter from "./LastFooter";
import PhysiqueNav from "./PhysiqueNav";
import ProductsName from "./ProductsName";
import SimilarProduct from "./SimilarProduct";

const SingleProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <div className="min-vh-100 d-flex flex-column">
          <PhysiqueNav />
          <ProductsName />
        </div>
        <SimilarProduct />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
