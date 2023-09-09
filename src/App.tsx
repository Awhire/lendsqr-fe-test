import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify'
import theme from "./theme"
import Routes from './router/Routes'

import 'react-toastify/dist/ReactToastify.css'
import  "./App.scss"





function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes/>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
