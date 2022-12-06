import React from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import ReviewsList from "../components/ReviewsList";
import useMovieStore from "../store/storeMovies";

export default function Movie() {
	const { id } = useParams();
	const movies = useMovieStore((state) => state.movies);
	const [movie] = movies.filter((m) => m.id === id);

	return (
		<>
			<h1>Movie</h1>
			{movie ? (
				<>
					<MovieInfo movie={movie} />
					<ReviewsList movie={movie} />
				</>
			) : (
				<h3>There is no such kind of link</h3>
			)}
		</>
	);
}
