import { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <button type="Submit">Add</button>
    </form>
  );
}

export default AddTask;
