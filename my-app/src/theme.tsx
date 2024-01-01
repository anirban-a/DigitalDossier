import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3c3c3c", // Replace with your primary color
      },
      secondary: {
        main: "#f5f5f5", // Replace with your secondary color
      },
    },
  })
);

export default theme;
