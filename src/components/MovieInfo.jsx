import React from "react";
import { Card, CardMedia, Typography, CardContent, Box } from "@mui/material";

export default function MovieInfo({ movie }) {
	return (
		<Box maxWidth={450}>
			<Card sx={{ position: "sticky", top: 20 }}>
				<CardMedia
					component="img"
					width='100%'
					image={movie.imgSrc}
					alt={movie.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{movie.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{movie.description}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
}
