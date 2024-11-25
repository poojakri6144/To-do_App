import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { v4 as uuidv4 } from "uuid";

const TaskInput = ({ showSnackbar }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (taskName.trim() === "") {
      setError(true);
      showSnackbar(false, true); // Show error snackbar
    } else {
      setError(false);
      // Create the task object with a unique id
      const newTask = {
        id: uuidv4(),
        name: taskName,
        description: taskDescription,
        completed: false,
      };
      dispatch(addTask(newTask)); // Dispatch the addTask action to Redux store
      setTaskName(""); // Reset task name input
      setTaskDescription(""); // Reset task description input
      showSnackbar(true, false); // Show success snackbar
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Typography variant="h6" gutterBottom>
        Add New Task
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Task Name"
            variant="outlined"
            fullWidth
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            error={error}
            helperText={error && "Task name is required."}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Task Description (Optional)"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            fullWidth
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskInput;
