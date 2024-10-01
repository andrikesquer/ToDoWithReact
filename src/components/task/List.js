import Task from "./Task";

function List({ tasks, handleComplete, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleComplete={handleComplete}
          deleteTask={() => deleteTask(index)}
          index={index}
        />
      ))}
    </div>
  );
}

export default List;
