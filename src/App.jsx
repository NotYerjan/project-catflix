import Navbar from "./components/Navbar";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Container, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Headbar from "./components/Headbar";
import { useEffect } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/movies");
    }
  }, [location.name]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        elevation={12}
        sx={{
          minHeight: "100vh",
          pb: "80px",
          borderRadius: 0,
        }}
      >
        <Headbar />
        <Navbar />
        <Container sx={{ paddingTop: 10 }}>
          <Outlet />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
