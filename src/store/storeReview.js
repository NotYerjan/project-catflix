import create from "zustand";
import { nanoid } from "nanoid";

const useReviewStore = create((set) => ({
  reviews: [
    { id: 1, content: "hello" },
    { id: 2, content: "second" },
    { id: 3, content: "hello" },
  ],
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
          : review
      ),
    })),
}));

export default useReviewStore;
