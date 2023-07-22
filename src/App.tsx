import { ThemeProvider } from "@mui/material/styles";
import PasswordGenerator from "./Generator";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green
    },
    secondary: {
      main: "#000000", // Black
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // You can change this to your preferred font
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
