import Task from "./task";

function List({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default List;
