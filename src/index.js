import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.tsx";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
