import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function AllReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Cannot load review data");
            })
            .then((response) => setReviews(response.reviews));
    }, []);

    return (
        <>
            <div className="App" ></div>
            <Container>
                <div className="row justify-content-center">
                    {reviews.map((review) => {
                        return (
                            <div
                                key={review.id}
                                className="card mb-3 w-100 justify-content-around">
                                <div className="row no-gutters">
                                    <div
                                        className="col-md-4">
                                        <img
                                            src={review.img_url}
                                            className="card-img"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {review.title}
                                            </h5>
                                            <p className="card-text">
                                                Rating: {review.rating} out of 5
                                            </p>
                                            <p className="card-text">
                                                Best Song: {review.best_song}
                                            </p>
                                            <p className="card-text">
                                                Worst Song: {review.worst_song}
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Reviewer: {review.username}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </>
    );
}

export default AllReviews;
