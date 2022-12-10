import { Box, Card, Paper, styled } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import ReviewsList from "../components/ReviewsList";
import useMovieStore from "../store/storeMovies";

const MovieBox = styled(Box)({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	gap: 20,
	paddingTop: 20,
});

export default function Movie() {
	const { id } = useParams();
	const movies = useMovieStore((state) => state.movies);
	const movie = movies.find((m) => m.id === id);

	return (
		<>
			{movie ? (
				<MovieBox>
					<MovieInfo movie={movie} />
					<ReviewsList movie={movie} />
				</MovieBox>
			) : (
				<h3>There is no such kind of link</h3>
			)}
		</>
	);
}
