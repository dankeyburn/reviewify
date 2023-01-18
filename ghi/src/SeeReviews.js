import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Review from "./ReviewModal";

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
                throw new Error("Automobile server bad resonse");
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
                                    <button onClick={Review}>See Full Review</button>
                                    <div>Title: {review.title}</div>
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
