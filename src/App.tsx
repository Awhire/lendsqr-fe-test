import { ThemeProvider } from "@mui/material/styles";
import Routes from "./router/Routes"
import { ToastContainer } from 'react-toastify'
import theme from "./theme"
import 'react-toastify/dist/ReactToastify.css'
import  "./App.scss"



// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#39CDCC",
//     },
//     secondary: {
//       main: "#B0EBEA",
//     },
//     action: {
//       disabled: "#fff",
//       disabledBackground: "#B0EBEA",
//     },
//   },
// });


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
