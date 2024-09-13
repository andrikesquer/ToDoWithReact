import React, { useState } from "react";
import AddTask from "./components/addtask";
import List from "./components/list";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (typeof task === "string" && task.trim() !== "") {
      const newTasks = [...tasks, { text: task.trim() }];
      setTasks(newTasks);
    } else {
      alert("You need to add a task");
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <header>
        <h1>To-Do List</h1>
      </header>
      <main>
        <h3>¡Add your task!</h3>
        <AddTask addTask={addTask} />
        <List
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;
