import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { FeedbackContext } from "@src/FeedbackContext";

export const FeedbackSnackbar = () => {
  const { feedback, setFeedback } = useContext(FeedbackContext)!;

  const closeSnackbar = () => {
    setFeedback((prevState) => ({ ...prevState, message: "" }));
  };

  return (
    <Snackbar open={!!feedback.message} autoHideDuration={5000} onClose={closeSnackbar}>
      <Alert onClose={closeSnackbar} severity={feedback.severity}>
        {feedback.message}
      </Alert>
    </Snackbar>
  );
};
