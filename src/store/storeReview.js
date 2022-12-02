import create from "zustand";
import { nanoid } from "nanoid";

const useReviewStore = create((set) => ({
  reviews: [
    { id: 1, name: "Sama Jabri", date: "Nov 23, 2022", content: "hello" },
    { id: 2, name: "Mozart", date: "Dec 2, 2022", content: "second" },
    { id: 3, name: "Alvaro", date: "Jan 15, 2022", content: "hello" },
    { id: 4, name: "Alvaro", date: "Jan 15, 2022", content: "helo" },
    { id: 5, name: "Alvaro", date: "Jan 15, 2022", content: "llo" },
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
