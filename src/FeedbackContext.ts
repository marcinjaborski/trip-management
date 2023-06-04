import { AlertColor } from "@mui/material";
import React, { createContext, SetStateAction } from "react";

type Feedback = {
  message: string;
  severity: AlertColor;
};

type FeedbackContext = {
  feedback: Feedback;
  setFeedback: React.Dispatch<SetStateAction<Feedback>>;
};

export const defaultFeedback: Feedback = {
  message: "",
  severity: "success",
};

export const FeedbackContext = createContext<FeedbackContext | null>(null);
