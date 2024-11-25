import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarAlerts = ({ success, error, onClose }) => {
  return (
    <>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={onClose}>
          Task added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarAlerts;
