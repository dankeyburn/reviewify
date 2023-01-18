import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function AllReviews() {
    const [reviews, setReviews] =useState([]);

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
                    response.reviews
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

export default AllReviews;
