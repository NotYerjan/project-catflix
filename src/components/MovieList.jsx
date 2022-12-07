import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
	return (
		<div className="listOfMovies">
			{movies.map((movie) => {
				return (
					<Link to={`/movies/${movie.id}`}>
						<img
							src={movie.imgSrc}
							alt="image of movie"
							className="img-resize"
						/>
						<h4 className="movie-title">{movie.title}</h4>
					</Link>
				);
			})}
		</div>
	);
}
