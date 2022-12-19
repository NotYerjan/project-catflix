import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Container, Box, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Headbar from "./components/Headbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
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
