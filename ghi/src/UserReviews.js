import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReviewModal from "./ReviewModal";
import { Context } from "./Store";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function UserReviews() {
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
    }, [account_id, setReviews]);

    // async function deleteReview(review_id) {
    //     const reviewUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews/${review_id}`;
    //     const fetchConfig = {
    //         method: "DELETE",
    //         credentials: "include",
    //     };
    //     const response = await fetch(reviewUrl, fetchConfig);
    //     if (response.ok) {
    //         setReviews(reviews.filter(review => review.id !== review_id));
    //     }
    // }

    return (
        <>
            <div className="App" style={{ marginTop: "30px" }}></div>
            {reviews.length > 0 ? (
                <Container>
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
                                        // delete_review={deleteReview()}
                                    />
                                    {/* <Button onClick={deleteReview(review.id)} >Delete</Button> */}
                                </div>
                            );
                        })}
                    </div>
                </Container>
            ) : (
                <Container>
                    <div
                        style={{ marginTop: "50px" }}
                        className="row justify-content-center">
                        You Have No Reiviews Yet!
                    </div>
                </Container>
            )}
        </>
    );
}

export default UserReviews;
