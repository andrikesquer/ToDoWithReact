import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { TextField, Box, Alert, Fab } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError(true);
    } else {
      addTask(task);
      setTask("");
      setError(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {error && <Alert severity="warning">Enter a task before adding</Alert>}
      <TextField
        label="New task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoComplete="off"
        sx={{
          "& label.Mui-focused": { color: "black" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: deepPurple[600] },
            "&.Mui-focused fieldset": { borderColor: "black" },
          },
          width: "400px",
          flexGrow: 1,
          minWidth: "200px",
        }}
      />
      <Fab size="small" color="secondary" type="submit">
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default AddTask;
