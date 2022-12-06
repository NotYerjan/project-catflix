import React from "react";

export default function MovieInfo({ movie }) {
	return (
		<>
			<h2>MovieInfo</h2>
			<ul>
				{movie.reviews.map((review, index) => (
					<li key={index}>{review}</li>
				))}
			</ul>
		</>
	);
}
