import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, markAsDone } from "./features/todos/todosSlice.js";
import Addform from "./Addform";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

  function handleDone(id) {
    dispatch(markAsDone(id));
  }

  return (
    <div>
      <h2>Todo app</h2>
      <Addform />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
