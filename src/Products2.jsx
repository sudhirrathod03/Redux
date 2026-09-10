import React from "react";
import { useGetProductsQuery } from "./features/products/productApi.js";
function Products2() {
  const { data, isLoading, isError } = useGetProductsQuery();
  console.log(useGetProductsQuery());
  //   console.log("DATA:", data);
  //   console.log("LOADING:", isLoading);
  //   console.log("ERROR:", error);

  if (isLoading) {
    return <p>loading...</p>;
  }

//   if (error) {
//     return <h1>{error.message}</h1>;
//   }

console.log("error", isError);
  return (
    <div>
      {data?.products?.map((product) => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  );
}

export default Products2;
