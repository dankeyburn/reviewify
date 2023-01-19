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
         <div className="App" style={{ marginTop: "30px"}}></div>
            {reviews !== [] ? (
            <container>
                <div className="row justify-content-center">
                        {reviews.map((review) => {
                            return (
                                <div key={review.id}
                                    className="card mb-3 w-100 justify-content-around"
                                    style={{ maxWidth: "540px"}}
                                    ><ReviewModal
                                    id={review.img_url}
                                    />
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
                        </div>
            </container>

            ) : (
                <div>No Reviews Yet</div>
            )}
        </>
    );
}

export default SeeReviews;


 // <div>
                //     <div>
                //         Reviews:
                //         {reviews.map((review) => {
                //             return (
                //                 <div key={review.id}>
                //                     <ReviewModal
                //                     id={review.id}
                //                     title={review.title}/>
                //                     <div>Rating: {review.rating}</div>
                //                     <div>Reviewer ID: {review.reviewer_id}</div>
                //                 </div>
                //             );
                //         })}
                //     </div>
                // </div>
