import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiHome, FiSearch, FiUser } from "react-icons/fi";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const [displaySearch, setDisplaySearch] = useState(false);

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
          <Link to="/movies">
            <IconButton>
              <FiHome className="navBarIcon" />
            </IconButton>
          </Link>

          <Link to="/liked">
            <IconButton>
              <FiHeart className="navBarIcon" />
            </IconButton>
          </Link>

          <Link to="/user">
            <IconButton>
              <FiUser className="navBarIcon" />
            </IconButton>
          </Link>

          <IconButton onClick={() => setDisplaySearch(!displaySearch)}>
            <FiSearch className="navBarIcon" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
