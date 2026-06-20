import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/todosSlice.js";

export const store = configureStore({
  reducer: todosSlice,
});
