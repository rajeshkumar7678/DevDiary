import FilterArea from "@/components/productPage/filterSection/FilterArea";
import ProductMainContant from "@/components/productPage/ProductMain/ProductMainContant";
import React from "react";

async function getBlogdata() {
  try {
    const data = await fetch("http://localhost:1234/blogs");
    const result = await data.json();
    console.log("--", result);
    return result.blogs;
  } catch (error) {
    console.log(error);
  }
}
export default async function Page() {
  const result = await getBlogdata();

  return (
    <div className="flex ">
      <div className="w-1/5">
        <FilterArea />
      </div>
      <div className="w-4/5">
        <ProductMainContant blogData={result} />
      </div>
    </div>
  );
}
