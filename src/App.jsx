import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Headbar from "./components/Headbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Logo from "./components/Logo";
import LogoLight from "./components/LogoLight";
import useUserStore from "./store/storeUsers";
import useMuiTheme from "./hooks/useMuiTheme";

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [checked, setChecked] = useState(false);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const { theme, MaterialUISwitch } = useMuiTheme(currentTheme);

  const navigate = useNavigate();
  const location = useLocation();
  let pathname = location.pathname;

  useEffect(() => {
    if (pathname == "/") {
      navigate("/movies");
    }
    setCurrentTheme((theme) => (checked ? "light" : "dark"));
  }, [pathname, checked, isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={12}
        sx={{
          minHeight: "100vh",
          pb: "80px",
          borderRadius: 0,
        }}
      >
        <Headbar
          themeSwitch={
            <MaterialUISwitch
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          }
          logo={currentTheme === "light" ? <LogoLight /> : <Logo />}
        />
        <Navbar />
        <Container sx={{ paddingTop: 10 }}>
          <Outlet />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
