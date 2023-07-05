import { ThemeProvider, createTheme } from "@mui/material";
import Appbar from "./components/Appbar";
import Userdetailsform from "./components/forms/Userdetailsform";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Detailcard from "./components/Detailcard";
import Dashboard from "./components/Dashboard";



function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#FBFBFB', // Replace this with your desired primary color
      },
      secondary:{
        main:'#6CC51D'
      }
    }
  });
  return (
      <ThemeProvider theme={customTheme}>
      {/* <Appbar/> */}
      <BrowserRouter>
      <Routes>
      <Route element={ <Dashboard />} path="/dashboard" />
        <Route element={ <Userdetailsform/>} path="/" />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
