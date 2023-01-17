import Footbar from "../components/Navbar/Footbar";
import Headbar from "../components/Navbar/Headbar";
import { Outlet, useLocation } from "react-router-dom";
import { Card, Container, Paper } from "@mui/material";

export default function RootLayout() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  // if (!isNavBar) {
  //   return (
  //     <Paper>
  //       <Outlet />
  //     </Paper>
  //   );
  // }

  return (
    <Paper
      elevation={12}
      sx={{
        minHeight: "100vh",
        pb: "80px",
        borderRadius: 0,
      }}
    >
      <Headbar />
      <Footbar />
      {isAuthPage ? (
        <Container
          sx={{
            paddingTop: 10,
            height: "calc(100vh - 80px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ paddingX: 3, paddingY: 5, width: 300 }}>
            <Outlet />
          </Card>
        </Container>
      ) : (
        <Container sx={{ paddingTop: 10 }}>
          <Outlet />
        </Container>
      )}
    </Paper>
  );
}
