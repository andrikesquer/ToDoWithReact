import React, { useState } from "react";
import AddTask from "./components/addtask";
import List from "./components/list";
import {
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  Box,
  CssBaseline,
  Switch,
} from "@mui/material";
import { deepPurple, red } from "@mui/material/colors";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  const addTask = (task) => {
    const newTasks = [...tasks, { text: task.trim(), completed: false }];
    setTasks(newTasks);
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            marginTop: "30px",
            marginBottom: "20px",
            bgcolor: deepPurple[600],
            color: red[400],
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            width: { xs: 1 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "-apple-system",
              fontStyle: "italic",
            }}
          >
            To-do List
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
          <Switch checked={darkMode} onChange={handleTheme} color="secondary" />
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            width: { xs: 1 },
            bgcolor: "lightgrey",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <AddTask addTask={addTask} />
        </Box>
        <List
          tasks={tasks}
          handleComplete={handleComplete}
          deleteTask={deleteTask}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
