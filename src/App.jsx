import useMovieStore from "./store/storeMovies.js";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const movies = useMovieStore((state) => state.movies);
	const addReview = useMovieStore((state) => state.addReviewToMovie);
	const removeReview = useMovieStore((state) => state.removeReviewFromMovie);

	return (
		<div>
			{movies.map((movie) => {
				return (
					<h1 key={movie.id}>
						MovieID:{movie.id}, Reviews:
						{movie.reviews.map((review) => {
							return (
								<div key={review}>
									<p>{review}</p>
									<button onClick={() => removeReview(movie.id, review)}>
										Delete
									</button>
								</div>
							);
						})}
					</h1>
				);
			})}
		</div>
	);
}

export default App;
