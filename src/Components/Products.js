import React from "react";
import LastFooter from "./LastFooter";
import ProductsHero from "./ProductsHero";
import SelectProduct from "./SelectProduct";

function Products() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <ProductsHero />
        <SelectProduct />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default Products;
