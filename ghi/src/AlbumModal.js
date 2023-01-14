import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

function AlbumModal(props) {
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

            <Modal
                key={props.album_id}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Album Details
                    </Modal.Title>
                    {/* <Modal.Img src={album.images?[0].url} /> */}
                </Modal.Header>
                <Modal.Body>
                    <div>Album Title: {album.name}</div>
                    <div>Label: {album.label}</div>
                    <div>Release Date: {album.release_date}</div>
                    <div>{props.album_id}</div>
                    <div>
                        <img
                            src={props.img_url}
                            alt=""
                            style={{ height: "300px" }}
                        />
                    </div>

                    <ol>
                        Tracks
                        {album.tracks?.items.map((track) => {
                            return <li key={track.id}>{track.name}</li>;
                        })}
                    </ol>
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
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AlbumModal;
