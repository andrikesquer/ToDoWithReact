function Task({ task, toggleComplete, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-througt" : "none" }}>
      {task.text}
      <button onClick={toggleComplete}>
        {task.completed ? "Not completed" : "Completed"}
      </button>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default Task;
