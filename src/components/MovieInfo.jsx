import React from "react";

export default function MovieInfo({ movie }) {
	return (
		<>
			<img src={movie.imgSrc} alt="movie image" height="300" />
			<h1>{movie.title}</h1>
			<p>Description: {movie.description}</p>
		</>
	);
}
