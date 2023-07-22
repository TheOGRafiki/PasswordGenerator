import { ThemeProvider } from "@mui/material/styles";
import PasswordGenerator from "./Generator";

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'IBM Plex Mono', monospace",
    body1: {
      color: "#333", // Set default text color to a dark color
    },
    body2: {
      color: "#333", // Set default text color to a dark color
    },
  },
  palette: {
    primary: {
      main: "#4CAF50", // Green
    },
    secondary: {
      main: "#000000", // Black
    },
  },
});

// src/App.tsx

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PasswordGenerator />
    </ThemeProvider>
  );
}

export default App;
