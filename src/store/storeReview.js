import create from "zustand";
import { nanoid } from "nanoid";
import { INIT_REVIEWS } from "./initReviews";

const useReviewStore = create((set) => ({
	reviews: INIT_REVIEWS,
	createReview: (content) =>
		set((state) => ({
			reviews: [...state.reviews, { id: nanoid(), content }],
		})),
	deleteReview: (reviewId) =>
		set((state) => ({
			reviews: state.reviews.filter((review) => review.id !== reviewId),
		})),
	updateReview: (reviewId, content) =>
		set((state) => ({
			reviews: state.reviews.map((review) =>
				review.id === reviewId
					? {
							...review,
							content,
					  }
					: review,
			),
		})),
}));

export default useReviewStore;
