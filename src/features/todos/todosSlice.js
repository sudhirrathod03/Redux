import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  todos: [{ id: "12", task: "Eat", isDone: false }],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //add task

    addTask: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };

      state.todos.push(newTodo);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((task) =>
        task.id === action.payload ? { ...task, isDone: true } : task
      );
    },
  },
});
export const { addTask, deleteTask, markAsDone } = todosSlice.actions;
export default todosSlice.reducer;
