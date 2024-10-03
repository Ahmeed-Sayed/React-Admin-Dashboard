import { ThemeOptions } from "@mui/material";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#06122b", // Dark Blue
    },
    secondary: {
      main: "#28334d", // Lighter Blue
    },
    info: {
      main: "#00bcd4", // Vibrant Teal
    },
    success: {
      main: "#4caf50", // Green
    },
    warning: {
      main: "#ff9800", // Orange
    },
    error: {
      main: "#f44336", // Red
    },
    text: {
      primary: '#f0f0f0', // Light Grey for text
      secondary: '#b0b0b0', 
   
    },
    background: {
      default: "#ffffff", // White background for light mode
      paper: "#f0f0f0", // Light grey for paper elements
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
};

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#113c99', // Lighter Blue for dark mode
    },
    secondary: {
      main: '#556ba0', // Even lighter Blue for dark mode
    },
    info: {
      main: '#00bcd4', // Vibrant Teal
    },
    success: {
      main: '#4caf50', // Green
    },
    warning: {
      main: '#ff9800', // Orange
    },
    error: {
      main: '#f44336', // Red
    },
    text: {
      primary: "#06122b", // Dark Blue for text
      secondary: "#28334d", //
    },
    background: {
      default: '#1a1a1a', // Dark background for dark mode
      paper: '#2e2e2e', // Lighter dark background for paper elements
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
};


export { lightTheme, darkTheme };
