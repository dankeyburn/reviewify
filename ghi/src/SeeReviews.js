import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReviewModal from "./ReviewModal";

function SeeReviews(props) {
    const location = useLocation();
    const album_id = location.state["id"];
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/reviews")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Cannot load review data");
            })
            .then((response) =>
                setReviews(
                    response.reviews.filter(
                        (review) => review.album_id === album_id
                    )
                )
            );
    }, []);



    return (
        <>
            {reviews !== [] ? (
                <div>
                    <div>
                        Reviews:
                        {reviews.map((review) => {
                            return (
                                <div key={review.id}>
                                    <ReviewModal
                                    id={review.id}
                                    title={review.title}/>
                                    <div>Rating: {review.rating}</div>
                                    <div>Reviewer ID: {review.reviewer_id}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div>No Reviews Yet</div>
            )}
        </>
    );
}

export default SeeReviews;