import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReviewModal from "./ReviewModal";
import { Context } from "./Store";

function UserReviews() {
    const location = useLocation();

    const [reviews, setReviews] = useState([]);
    const [state] = useContext(Context);
    const account_id = state.currentAccount["id"];

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts/${account_id}/reviews`
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Cannot load review data");
            })
            .then((response) => setReviews(response.reviews));
    }, [account_id]);

    return (
        <>
            <div className="App" style={{ marginTop: "30px" }}></div>
            {reviews !== [] ? (
                <container>
                    <div className="row justify-content-center">
                        {reviews.map((review) => {
                            return (
                                <div
                                    key={review.id}
                                    className="card mb-3 w-100 justify-content-around"
                                    style={{ maxWidth: "540px" }}>
                                    <ReviewModal
                                        id={review.id}
                                        img_url={review.img_url}
                                        title={review.title}
                                        rating={review.rating}
                                        best_song={review.best_song}
                                        worst_song={review.worst_song}
                                        reviewer_id={review.reviewer_id}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </container>
            ) : (
                <div>No Reviews Yet</div>
            )}
        </>
    );
}

export default UserReviews;
