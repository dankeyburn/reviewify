import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../UseToken";
import { Context } from "../Store";
import { useContext } from "react";

function ReviewModal(props) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [review, setReview] = useState([]);
    const { token } = useAuthContext();
    const [state, dispatch] = useContext(Context);

    async function search() {
        fetch(
            `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews/${props.id}/`
        )
            .then((response) => response.json())
            .then((data) => {
                setReview(data);
            });
    }

    async function deleteReview(review_id) {
        const reviewUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews/${review_id}`;
        const fetchConfig = {
            method: "DELETE",
            credentials: "include",
        };
        const response = await fetch(reviewUrl, fetchConfig);
        if (response.ok) {
            setReview(review.filter((review) => review.id !== review_id));
        }
    }

    return (
        <>
            <div
                onClick={() => {
                    setShow(true);
                    search();
                }}>
                <div className="row no-gutters">
                    <div
                        className="col-md-4"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                        <img
                            src={props.img_url}
                            className="card-img"
                            alt="..."
                            style={{ paddingLeft: "15px" }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">
                                Rating: {props.rating} out of 5
                            </p>
                            <p className="card-text">
                                Best Song: {props.best_song}
                            </p>
                            <p className="card-text">
                                Worst Song: {props.worst_song}
                            </p>
                            {props.reviewer_name ? (
                                <p className="card-text">
                                    <small className="text-muted">
                                        Reviewer: {props.reviewer_name}
                                    </small>
                                </p>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                key={props.review_id}
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
                className="modal fade bd-example-modal-lg"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Review Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 1fr)",
                        gridTemplateRows: "repeat(5, 1fr)",
                    }}>
                    <img
                        alt="Album Cover"
                        src={review.img_url}
                        style={{
                            gridArea: "1 / 1 / 4 / 4",
                            objectFit: "contain",
                            maxWidth: "100%",
                        }}
                    />

                    <div
                        style={{
                            gridArea: "1 / 4 / 2 / 7",
                            textAlign: "center",
                            fontSize: "20px",
                        }}>
                        {review.title}
                    </div>
                    <div
                        style={{
                            gridArea: "3 / 4 / 4 / 7",
                            marginTop: "20px",
                            marginLeft: "20px",
                        }}>
                        Content:<br></br> {review.content}
                    </div>
                    <div
                        style={{
                            gridArea: "2 / 4 / 3 / 7",
                            marginLeft: "20px",
                        }}>
                        <div>Rating: {review.rating} out of 5</div>
                        <div style={{ marginTop: "20px" }}>
                            Best Song: {review.best_song}
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            Worst Song: {review.worst_song}
                        </div>
                    </div>
                </Modal.Body>
                <div>
                    {state.token &&
                    state.currentAccount["id"] === review.reviewer_id ? (
                        <Modal.Footer>
                            <NavLink
                                to="/reviews/update"
                                state={{
                                    album_id: review.album_id,
                                    reviewer_id: review.reviewer_id,
                                    title: review.title,
                                    rating: review.rating,
                                    content: review.content,
                                    best_song: review.best_song,
                                    worst_song: review.worst_song,
                                    img: review.img_url,
                                    id: review.id,
                                }}>
                                <Button
                                    type="button"
                                    className="btn btn-primary btn-sm">
                                    Edit
                                </Button>
                            </NavLink>
                            <Button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={() => {
                                    deleteReview(review.id);
                                    setShow(false);
                                    window.location.href = `${process.env.PUBLIC_URL}/reviews/user`;
                                }}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    ) : (
                        <></>
                    )}
                </div>
            </Modal>
        </>
    );
}

export default ReviewModal;
