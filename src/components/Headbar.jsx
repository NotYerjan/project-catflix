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
} from "@mui/material";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Headbar() {
  const [userDropdown, setUserDropdown] = useState(false);

  const buttonStyling = {
    width: "100%",
    backgroundColor: "inherit",
    borderBottom: "white solid 0.5px",
    color: "inherit",
    borderRadius: "0",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "#1e1e1e",
      boxShadow: "none",
    },

    "&:last-child": {
      borderBottom: "none",
    },
  };

  const linkStyling = {
    width: "100%",
    color: "inherit",
    textDecoration: "none",
  };

  const menuId = "primary-search-account-menu";
  return (
    <AppBar>
      <Toolbar>
        <Link to="/movies">
          <Logo />
        </Link>
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
            onClick={() => setUserDropdown(!userDropdown)}
          >
            <Avatar>
              <Popover
                sx={{ marginTop: "2.7rem" }}
                open={userDropdown}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "11rem",
                  }}
                >
                  <Button variant="contained" sx={buttonStyling}>
                    <Link to="/user" style={linkStyling}>
                      Profile
                    </Link>
                  </Button>
                  <Button variant="contained" sx={buttonStyling}>
                    <Link to="/user/edit" style={linkStyling}>
                      Settings
                    </Link>
                  </Button>
                  <Button variant="contained" sx={buttonStyling}>
                    <Link to="/login" style={linkStyling}>
                      Log out
                    </Link>
                  </Button>
                </div>
              </Popover>
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
