import { variables } from "./variables.tsx";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "assistant",
    h2: {
      fontWeight: 700,
      fontSize: 28,
      textAlign: "center",
      color: variables.primaryClolor,
    },
    h3: {
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      color: variables.secondaryColor,
    },
    h4: {
      fontWeight: 400,
      fontSize: 18,
      color: variables.primaryClolor,
      textAlign: "center",
    },
  },
  spacing: [
    0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 26, 28, 32, 40, 45, 55, 70, 80,
  ], //18 index
  breakpoints: {
    values: {
      xs: 0,
      sm: 744,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});
