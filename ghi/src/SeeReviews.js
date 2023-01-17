import React, { useState } from "react";

function SeeReviews(props) {
    const [show, setShow] = useState(false);
    const [album, setAlbum] = useState([]);
    const [reviews, setReviews] = useState([]);

     async function search() {
        fetch(`http://localhost:8000/api/albums/${props.album_id}`)
            .then((response) => response.json())
            .then((data) => {
                setAlbum(data);
            });
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
                        (review) => review.album_id === props.album_id
                    )
                )
            );
    }



    return (
        <>
         <img
                src={props.img_url}
                onClick={() => {
                    setShow(true);
                    search();
                }}
                alt={`${props.album_name} Album Cover`}
            />
         {reviews !== [] ? (
                        <div>
                            <div>
                                Reviews:
                                {reviews.map((review) => {
                                    return (
                                        <div key={review.id}>
                                            <div>Rating: {review.rating}</div>
                                            <div>Content: {review.content}</div>
                                            <div>
                                                Reviewer ID:{" "}
                                                {review.reviewer_id}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div>No Reviews Yet</div>
                    )}
        </>
    )
}

export default SeeReviews;
