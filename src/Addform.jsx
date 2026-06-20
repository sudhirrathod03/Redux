import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./features/todos/todosSlice.js";
function Addform() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask(task));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add task</button>
      </form>
    </>
  );
}

export default Addform;
