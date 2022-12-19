import Logo from "./Logo";
import { FiBell } from "react-icons/fi";
import { Toolbar, Box, IconButton, Badge, Avatar, AppBar } from "@mui/material";
import Searchbar from "./Searchbar";

export default function Headbar() {
  const menuId = "primary-search-account-menu";
  return (
    <AppBar>
      <Toolbar>
        <Logo />
        <Searchbar place="header" />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <FiBell />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Avatar />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
