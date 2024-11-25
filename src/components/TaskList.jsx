import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  IconButton, Tooltip, Paper, Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Task List
      </Typography>
      {tasks.length === 0 ? (
        <Typography variant="body1">No tasks available. Add some!</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Task Name</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell style={{ textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "green" : "inherit" }}>
                    {task.name}
                  </TableCell>
                  <TableCell>{task.description || "No description"}</TableCell>
                  <TableCell>
                    <Tooltip title={task.completed ? "Undo" : "Mark as Done"}>
                      <IconButton
                        color={task.completed ? "default" : "success"}
                        onClick={() => onToggleTask(task.id)}
                      >
                        {task.completed ? <CancelIcon /> : <CheckCircleIcon />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Task">
                      <IconButton
                        color="error"
                        onClick={() => onDeleteTask(task.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default TaskList;
