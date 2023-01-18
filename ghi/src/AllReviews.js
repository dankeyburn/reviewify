import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";

function AllReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/reviews")
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
            <div className="App" style={{ marginTop: "30px"}}></div>
            <Container style={{display: 'flex', justifyContent: 'center'}}>
            <Row className="mx-2 row row-cols-4">
                    {reviews.map((review) => {
                        return (
                            <div
                                className="card mb-3 w-100"
                                style={{ maxWidth: "540px"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-4" style={{display: 'flex', alignItems: 'center'}}>
                                        <img
                                            src={review.img_url}
                                            className="card-img"
                                            alt="..."
                                            style={{paddingLeft: '15px'}}
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
                                                    Reviewer:{" "}
                                                    {review.reviewer_id}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </Row>
            </Container>
        </>
    );
}

export default AllReviews;

// <Card
//     key={review.id}>
//     <img src={review.img_url}/>
// </Card>
