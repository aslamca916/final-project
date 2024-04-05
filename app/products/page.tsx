import React from "react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  return (
    <div className="my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -m-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
