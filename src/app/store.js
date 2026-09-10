import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/todosSlice.js";
import usersSlice from "../features/users/usersSlice.js";
import counterSlice from "../features/counters/counterSlice.js";
import productSlice from "../features/products/productsSlice.js";
import { productApi } from "../features/products/productApi.js";
export const store = configureStore({
  reducer: {
    todos: todosSlice,
    users: usersSlice,
    products: productSlice,
    counters: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
