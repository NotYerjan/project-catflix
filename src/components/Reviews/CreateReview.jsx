import {
	Card,
	TextField,
	CardContent,
	CardActions,
	Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import useReviewStore from "../../store/storeReview.js";

export default function CreateReview() {
	const createReview = useReviewStore((state) => state.createReview);
	const [review, setReview] = useState("");

	const addReview = (e) => {
		console.log(review);
		review ? createReview(review) : alert("Comment can't be empty");
		setReview("");
	};

	return (
		<Card elevation={6} onSubmit={addReview}>
			<CardContent>
				<TextField
					label="Review"
					helperText="Please write your review here"
					multiline
					rows={4}
					value={review}
					onChange={(e) => setReview(e.target.value)}
					sx={{
						width: "100%",
					}}
				/>
			</CardContent>
			<CardActions
				sx={{ display: "flex", justifyContent: "center", padding: 2, pt: 0 }}
			>
				<Button variant="contained" onClick={addReview}>
					Submit
				</Button>
			</CardActions>
		</Card>
	);
}
