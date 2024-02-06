import { AddReview, fetchByIdCourse } from "@/redux/action/courseAction";
import { getUserJwt } from "@/redux/action/userAction";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCaretBack } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Review = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [reviewText, setReviewText] = useState("");
  const [id, setId] = useState("");
  const [reviews, setReviews] = useState(null);
  const { user, loading: loading2 } = useSelector((e) => e.user);
  const [rating, setRating] = useState(0); // Initial value

  useEffect(() => {
    setId(router.query._id);
  }, [router.query]);

  const {
    courses,
    course,
    error,
    loading: loading1,
  } = useSelector((e) => e.course);

  useEffect(() => {
    dispatch(getUserJwt());
    dispatch(fetchByIdCourse(id));
  }, [id]);

  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = () => {
    if (reviewText.length < 15) {
      toast.warn("text more than 15 characters");
      return;
    }

    if (rating == 0) {
      toast.warn("Please select rating");
      return;
    }

    // Check if the user already has a review for the current course
    const existingReviewIndex = reviews.findIndex(
      (review) => review.user.name === user.username
    );

    if (existingReviewIndex !== -1) {
      // Update existing review
      const updatedReviews = [...reviews];
      updatedReviews[existingReviewIndex] = {
        ...updatedReviews[existingReviewIndex],
        rating: 5, // Update rating if needed
        comment: reviewText, // Update comment
      };
      setReviews(updatedReviews);
      const courseID = id;
      //   dispatch(UpdateReview({ rating: 4, comment: reviewText, courseID }));
      return;
    } else {
      // Add new review
      const review = {
        user: {
          name: user.username,
          avatar: user.avatar,
        },
        rating: rating,
        comment: reviewText,
      };
      setReviews([...reviews, review]);
      const courseID = id;

      dispatch(AddReview({ rating: 4, comment: reviewText, courseID }));
    }
  };

  useEffect(() => {
    if (course) {
      setReviews(course.reviews);
    }
  }, [course]);

  return (
    <div className="bg-c2 w-full min-h-[100vh] text-white px-[5vw] py-[3vw] text-lg font-semibold">
      {course && (
        <div>
          <h1 className="flex items-center">
            <span onClick={() => router.back()}>
              <IoCaretBack />
            </span>
            Review of : {course.title}
          </h1>
          <div className="flex flex-col items-center justify-center relative">
            <div className="mt-5 w-full flex items-center justify-center flex-col my-5 relative">
              <textarea
                className="w-[50%] min-h-[120px] text-black p-2 text-[15px] capitalize outline-none rounded-md"
                placeholder="Add review...."
                value={reviewText}
                onChange={handleInputChange}
              />

              <div className="flex gap-3">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={rating}
                  onChange={setRating}
                  className="absolute top-0"
                />

                <button
                  className="w-[50%] mt-2 border-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            {reviews &&
              reviews.map((e) => (
                <div className="w-[50%] mt-5 bg-gray-500 px-3 py-2 min-h-[100px]">
                  <div className="flex justify-between">
                    <div>
                      <img
                        src={
                          user.avatar
                            ? `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/${user.avatar}`
                            : "./placeholder.webp"
                        }
                        className="w-[40px] h-[40px] rounded-full"
                      ></img>
                      <p>{e.user?.username}</p>
                    </div>
                    <p className="flex items-center gap-1 text-sm">
                      <IoIosStar className="text-yellow-500" />
                      <span>{e.rating}</span>
                    </p>
                  </div>
                  <p className="text-[15px]  font-extralight opacity-[0.5]">
                    {e.comment}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Review;
