import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let check;
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),

  endpoints: (builder) => ({
   check:builder,
    getProducts: builder.query({
      query: () => "products",
    }),
   
  }),


});


export const { useGetProductsQuery } = productApi;
