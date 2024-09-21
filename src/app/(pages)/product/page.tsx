import FilterArea from "@/components/productPage/filterSection/FilterArea";
import ProductMainContant from "@/components/productPage/ProductMain/ProductMainContant";
import React from "react";

export default function Page() {
  const name = "karan";
  return (
    <div className="flex ">
      <div className="w-1/5">
        <FilterArea />
      </div>
      <div className="w-4/5">
        {name}
        <ProductMainContant />
      </div>
    </div>
  );
}
