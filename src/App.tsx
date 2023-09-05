import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./router/Routes"



const theme = createTheme({
  palette: {
    primary: {
      main: "#39CDCC",
    },
    secondary: {
      main: "#B0EBEA",
    },
    action: {
      disabled: "#fff",
      disabledBackground: "#B0EBEA",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
