import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiHeart, FiHome, FiSearch, FiUser } from "react-icons/fi";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Popover,
  Button,
  ButtonGroup,
} from "@mui/material";
import Searchbar from "./Searchbar";
import useUserStore from "../../store/storeUsers";

export default function Footbar() {
  const [displaySearch, setDisplaySearch] = useState(false);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useUserStore((state) => state.currentUser);
  let location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    handleClose();
    navigate(path);
  };

  const handleLogout = () => {
    handleClose();
    logoutUser();
    if (location.pathname.includes("user")) {
      navigate("/login");
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: { xs: "auto", md: 0 }, bottom: { xs: 0, md: "auto" } }}
      >
        {displaySearch && (
          <Box sx={{ padding: "10px", display: { xs: "block", md: "none" } }}>
            <Searchbar />
          </Box>
        )}
        <Toolbar
          sx={{
            justifyContent: "space-around",
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton onClick={() => navigate("/")} sx={{ color: "white" }}>
            <FiHome className="navBarIcon" />
          </IconButton>

          <IconButton
            onClick={() => setDisplaySearch(!displaySearch)}
            sx={{ color: "white" }}
          >
            <FiSearch className="navBarIcon" />
          </IconButton>

          <IconButton
            onClick={() => navigate("/profile/favorites")}
            sx={{ color: "white" }}
          >
            <FiHeart className="navBarIcon" />
          </IconButton>

          <IconButton
            onClick={handleClick}
            aria-describedby={id}
            sx={{ color: "white" }}
          >
            <FiUser className="navBarIcon" />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <ButtonGroup
              orientation="vertical"
              sx={{ width: "90vw" }}
              variant="text"
            >
              {isLoggedIn ? (
                <>
                  <Button onClick={() => handleNavigate(`/profile/${user.id}`)}>
                    Profile
                  </Button>
                  <Button onClick={() => handleLogout()}>Log out</Button>
                </>
              ) : (
                <>
                  <Button onClick={() => handleNavigate("/login")}>
                    Login
                  </Button>
                  <Button onClick={() => handleNavigate("/signup")}>
                    Sign up
                  </Button>
                </>
              )}
            </ButtonGroup>
          </Popover>
        </Toolbar>
      </AppBar>
    </>
  );
}
