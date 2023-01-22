import { useState } from "react";
import Logo from "../Logo";
import { FiBell } from "react-icons/fi";
import {
  Toolbar,
  Box,
  IconButton,
  Badge,
  Avatar,
  AppBar,
  Popover,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import Searchbar from "./Searchbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserStore from "../../store/storeUsers";
import useMuiTheme from "../../hooks/useMuiTheme";

export default function Headbar() {
  const { MaterialUISwitch } = useMuiTheme();
  const isDarkMode = useUserStore((state) => state.isDarkMode);
  const switchMode = useUserStore((state) => state.switchMode);
  const navigate = useNavigate();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const user = useUserStore((state) => state.currentUser);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const [anchorEl, setAnchorEl] = useState(null);
  let location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logoutUser();
    if (location.pathname.includes("user")) {
      navigate("/login");
    }
  };

  const handleNavigate = (path) => {
    handleClose();
    navigate(path);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover-headbar" : undefined;

  const menuId = "primary-search-account-menu";
  return (
    <AppBar>
      <Toolbar>
        <Link to="/">
          <Logo />
        </Link>
        <Box sx={{ marginLeft: "24px", display: { xs: "none", md: "block" } }}>
          <Searchbar place="header" />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <MaterialUISwitch checked={isDarkMode} onChange={switchMode} />
        {!isLoggedIn ? (
          <ButtonGroup sx={{ display: { xs: "none", md: "block" } }}>
            <Button onClick={() => navigate("/login")} color="secondary">
              Login
            </Button>
            <Button variant="contained" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </ButtonGroup>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <FiBell />
              </Badge>
            </IconButton>
            <Typography>Hello, {user.username}</Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              sx={{ display: { xs: "none", md: "block" } }}
              onClick={handleClick}
              aria-describedby={id}
            >
              <Avatar />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ButtonGroup
                orientation="vertical"
                sx={{ width: 150 }}
                variant="text"
              >
                <Button onClick={() => handleNavigate(`/profile/${user.id}`)}>
                  Profile
                </Button>
                <Button onClick={() => handleNavigate("/profile/favorites")}>
                  My Movies
                </Button>
                <Button onClick={handleLogout}>Log out</Button>
              </ButtonGroup>
            </Popover>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
