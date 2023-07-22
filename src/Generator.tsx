// src/PasswordGenerator.tsx
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCapitalLetters, setIncludeCapitalLetters] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    const specialChars = includeSpecialChars
      ? "!@#$%^&*()-_=+[]{}|;:,.<>?/"
      : "";
    const numbers = includeNumbers ? "0123456789" : "";
    const capitalLetters = includeCapitalLetters
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      : "";

    const allChars =
      "abcdefghijklmnopqrstuvwxyz" + specialChars + numbers + capitalLetters;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }

    setGeneratedPassword(newPassword);
  };

  const calculatePasswordStrength = () => {
    let strength = "Very Weak";
    if (
      passwordLength >= 16 &&
      includeSpecialChars &&
      includeNumbers &&
      includeCapitalLetters
    ) {
      strength = "Very Strong";
    } else if (
      passwordLength >= 14 &&
      includeSpecialChars &&
      (includeNumbers || includeCapitalLetters)
    ) {
      strength = "Strong";
    } else if (
      passwordLength >= 12 &&
      (includeSpecialChars || includeNumbers || includeCapitalLetters)
    ) {
      strength = "Moderate";
    } else if (
      passwordLength >= 10 &&
      (includeNumbers || includeCapitalLetters)
    ) {
      strength = "Weak";
    } else if (passwordLength >= 8) {
      strength = "Very Weak";
    }
    return strength;
  };

  const passwordStrengthColor = () => {
    const strength = calculatePasswordStrength();
    switch (strength) {
      case "Very Weak":
        return "#FF0000"; // Red
      case "Weak":
        return "#FFA500"; // Orange
      case "Moderate":
        return "#FFFF00"; // Yellow
      case "Strong":
        return "#00FF00"; // Green
      case "Very Strong":
        return "#00FFFF"; // Cyan
      default:
        return "#FFFFFF"; // White (fallback)
    }
  };

  return (
    <Card
      sx={{
        height: "100vh",
        width: "30vw", // Set the width to approximately 30% of the viewport width
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000", // Black background color
        color: "#FFFFFF", // White text color
        padding: "16px", // Add some padding to the card
      }}
    >
      <Typography variant="h4" gutterBottom>
        Password Generator
      </Typography>
      <TextField
        label="Password Length"
        type="number"
        value={passwordLength}
        onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          style: { color: "#FFFFFF" }, // Default white text color for input
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
        }
        label="Include Special Characters"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        }
        label="Include Numbers"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={includeCapitalLetters}
            onChange={(e) => setIncludeCapitalLetters(e.target.checked)}
          />
        }
        label="Include Capital Letters"
      />
      <Button variant="contained" color="primary" onClick={generatePassword}>
        Generate Password
      </Button>
      {generatedPassword && (
        <>
          <Typography variant="h5" gutterBottom>
            Generated Password:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {generatedPassword}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            <Box
              width="100px"
              height="20px"
              borderRadius="5px"
              style={{ backgroundColor: passwordStrengthColor() }}
            />
            <Typography variant="body1" ml={1}>
              Password Strength: {calculatePasswordStrength()}
            </Typography>
          </Box>
        </>
      )}
    </Card>
  );
}

export default PasswordGenerator;
