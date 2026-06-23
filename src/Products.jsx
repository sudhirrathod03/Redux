import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {fetchProducts} from "./features/products/productsSlice.js"
function Products() {
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(fetchProducts())}>get Products</button>
      <h2>Products</h2>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}

      {products.map((prod) => (
        <li key={prod.id}>{prod.title}</li>
      ))}
    </>
  );
}

export default Products;
