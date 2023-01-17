import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

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
                size="lg"
                key={props.album_id}
                show={show}
                onHide={() => setShow(false)}
                className="modal fade bd-example-modal-lg"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Album Details
                    </Modal.Title>
                    {/* <Modal.Img src={album.images?[0].url} /> */}
                </Modal.Header>
                <Modal.Body
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gridTemplateRows: "repeat(5, 1fr)",
                        gridColumnGap: "0px",
                        gridRowGap: "0px",
                    }}>
                    <div
                        style={{
                            gridArea: "1 / 3 / 3 / 6",
                            marginLeft: "10px",
                            marginRight: "10px",
                        }}>
                        <div
                            style={{
                                fontWeight: "bold",
                                textAlign: "center",
                                fontSize: "30px ",
                                marginBottom: "10px",
                                borderBottom: "2px solid black",
                            }}>
                            {album.name}
                        </div>

                        <div>Release Date: {album.release_date}</div>
                        <div>Label: {album.label}</div>
                    </div>

                    <div
                        style={{
                            // height: "100px",
                            gridArea: "1 / 1 / 3 / 3",
                        }}>
                        <img
                            src={props.img_url}
                            alt=""
                            style={{ objectFit: "contain", maxWidth: "100%" }}
                        />
                    </div>
                    <div
                        style={{
                            gridArea: "3 / 4 / 6 / 6",
                            height: "30px",
                            marginTop: "30px",
                        }}>
                        <ol>
                            Tracks
                            {album.tracks?.items.map((track) => {
                                return <li key={track.id}>{track.name}</li>;
                            })}
                        </ol>
                    </div>

                    <Button
                        style={{
                            backgroundColor: "#a3d2fd",
                            color: "#3f72af",
                            borderColor: "#a3d2fd",
                        }}
                        type="button"
                        className="btn btn-primary btn-sm">
                        <NavLink
                            style={{
                                color: "#3f72af",
                                textDecoration: "none",
                            }}
                            to="/reviews/new"
                            state={{
                                id: props.album_id,
                                name: album.name,
                                tracks: album.tracks?.items,
                            }}>
                            Review
                        </NavLink>
                    </Button>
                    <Button
                        style={{
                            backgroundColor: "#a3d2fd",
                            color: "#3f72af",
                            borderColor: "#a3d2fd",
                        }}
                        type="button"
                        className="btn btn-primary btn-sm">
                        <NavLink
                            style={{
                                color: "#3f72af",
                                textDecoration: "none",
                            }}
                            to="/reviews"
                            state={{ id: props.album_id }}>
                            See Reviews
                        </NavLink>
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AlbumModal;
