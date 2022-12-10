import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia } from "@mui/material";

export default function MovieList({ movies }) {
	return (
		<Grid container spacing={2}>
			{movies.map((movie, index) => {
				return (
					<Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
						<Card>
							<Link to={`/movies/${movie.id}`}>
								<CardMedia
									component="img"
									width='100%'
									image={movie.imgSrc}
									alt={movie.title}
								/>
							</Link>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
}
