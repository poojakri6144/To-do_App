import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import SnackbarAlerts from "./components/SnackbarAlerts";
import { v4 as uuidv4 } from "uuid";
import { addTask, toggleTask, deleteTask } from "./redux/tasksSlice";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux state
  const [showSuccessSnackbar, setShowSuccessSnackbar] = React.useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = React.useState(false);

  const handleAddTask = (task) => {
    const newTask = { ...task, id: uuidv4(), completed: false };
    dispatch(addTask(newTask)); // Dispatch the addTask action
    setShowSuccessSnackbar(true); // Show success snackbar
  };

  const handleToggleTaskCompletion = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatch the toggleTask action
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch the deleteTask action
  };

  const handleCloseSnackbar = () => {
    setShowSuccessSnackbar(false);
    setShowErrorSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom style={{ marginTop: "20px", color: "#1976d2" }}>
        To-do App
      </Typography>
      
      {/* Task Input */}
      <TaskInput onAddTask={handleAddTask} showSnackbar={setShowErrorSnackbar} />
      
      {/* Task List */}
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTaskCompletion}
        onDeleteTask={handleDeleteTask}
      />
      
      {/* Snackbar for Success/Errors */}
      <SnackbarAlerts
        success={showSuccessSnackbar}
        error={showErrorSnackbar}
        onClose={handleCloseSnackbar}
      />
    </Container>
  );
};

export default App;
