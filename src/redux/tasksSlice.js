import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed; // Toggle completion
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.findIndex((task) => task.id === taskId);
      if (taskIndex >= 0) {
        state.splice(taskIndex, 1);
      } else {
        console.error("Task not found, could not delete.");
      }
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
