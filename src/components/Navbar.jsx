import * as React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiHome, FiSearch, FiUser } from "react-icons/fi";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";

export default function Navbar() {
	return (
		<AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
			<Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
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

				<Link to="/users">
					<IconButton>
						<FiUser className="navBarIcon" />
					</IconButton>
				</Link>

				<Link to="/search">
					<IconButton>
						<FiSearch className="navBarIcon" />
					</IconButton>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
