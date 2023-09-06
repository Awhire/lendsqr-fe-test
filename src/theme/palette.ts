import { colors } from "@mui/material";

const white = "#fff";

const palette = {
  primary: {
    main: "#39CDCC",
    light: "#39cdcc99",
    contrastText: white,
  },
  secondary: {
    main: "#213F7D",
    contrastText: white,
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: "#545F7D",
    secondary: "#213F7D",
    white: '#FFFFFF'
  },
  action: {
    disabled: "#FFFFFF",
    disabledBackground: "#7EDEDE",
  },
};

export default palette;
