import { Checkbox, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Task({ task, handleComplete, deleteTask, index }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "16px",
        marginTop: "16px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => handleComplete(index)}
        color="secondary"
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flexGrow: 1,
          wordWrap: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "normal",
          color: "secondary"
        }}
      >
        {task.text}
      </span>
      <IconButton aria-label="delete" onClick={() => deleteTask(index)}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

export default Task;
