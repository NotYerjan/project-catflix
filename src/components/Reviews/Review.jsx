import React from "react";
import useReviewStore from "../../store/storeReview.js";
import { FiTrash, FiEdit, FiUser } from "react-icons/fi";
import {
	Card,
	CardHeader,
	Avatar,
	Box,
	IconButton,
	CardContent,
	Typography,
} from "@mui/material";

export default function Review(props) {
	const updateReview = useReviewStore((state) => state.updateReview);
	const deleteReview = useReviewStore((state) => state.deleteReview);
	const { id, name, src, date, content } = props.content;

	const handleDeleteReview = (e) => {
		deleteReview(id);
	};

	const handleEditReview = (e) => {
		console.log("review edited");
	};

	return (
		<Card elevation={6}>
			<CardHeader
				avatar={<Avatar sx={{ bgcolor: "red" }}>{name}</Avatar>}
				action={
					<Box>
						<IconButton onClick={handleEditReview}>
							<FiEdit />
						</IconButton>
						<IconButton onClick={handleDeleteReview}>
							<FiTrash />
						</IconButton>
					</Box>
				}
				title={name}
				subheader={date}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{content}
				</Typography>
			</CardContent>
		</Card>
	);
}
