import { useState } from "react";
import Logo from "./Logo";
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
} from "@mui/material";
import Searchbar from "./Searchbar";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/storeUsers";

export default function Headbar({ themeSwitch, logo }) {
  const navigate = useNavigate();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover-headbar" : undefined;

  const menuId = "primary-search-account-menu";
  return (
    <AppBar>
      <Toolbar>
        <Link to="/movies">{logo}</Link>

        <Searchbar place="header" />

        <Box sx={{ flexGrow: 1 }} />

        {themeSwitch}

        {!isLoggedIn ? (
          <ButtonGroup sx={{ display: { xs: "none", md: "block" } }}>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button variant="contained" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </ButtonGroup>
        ) : (
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
                <Button onClick={() => navigate("/user")}>Profile</Button>
                <Button onClick={logoutUser}>Log out</Button>
              </ButtonGroup>
            </Popover>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
