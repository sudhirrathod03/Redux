import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/todosSlice.js";
import usersSlice from "../features/users/usersSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    users: usersSlice,
  },
});
