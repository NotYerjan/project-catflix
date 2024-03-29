import create from "zustand";
import { nanoid } from "nanoid";
import { INIT_REVIEWS } from "./initReviews";
import { persist } from "zustand/middleware";

const useReviewStore = create(
  persist(
    (set, get) => ({
      reviews: INIT_REVIEWS,

      createReview: (newReview) =>
        set((state) => ({
          reviews: [...state.reviews, newReview],
        })),

      deleteReview: (reviewId) =>
        set((state) => ({
          reviews: state.reviews.filter((review) => review.id !== reviewId),
        })),

      deleteAllReviewsOfUser: (userId) =>
        set((state) => ({
          reviews: state.reviews.filter((review) => review.userId !== userId),
        })),

      updateReview: (reviewId, content, rating) =>
        set((state) => ({
          reviews: state.reviews.map((review) =>
            review.id === reviewId
              ? {
                  ...review,
                  content,
                  rating,
                }
              : review
          ),
        })),
    }),
    { name: "storage" }
  )
);

export default useReviewStore;
