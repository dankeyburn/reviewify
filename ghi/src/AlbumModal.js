import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

function AlbumModal(props) {
    const [show, setShow] = useState(false);
    const [album, setAlbum] = useState([]);

    async function search() {
        fetch(`http://localhost:8000/api/albums/${props.album_id}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setAlbum(data);
            });
        // Display those albums to the user
        // await console.log(album.images[0]["height"]);
    }
    return (
        <>
            <Button
                variant="primary"
                onClick={() => {
                    setShow(true);
                    search();
                }}>
                See Album
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Album Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Album ID: {props.album_id}</div>
                    <div>Album Title: {album.name}</div>
                    <div>Label: {album.label}</div>
                    <div>Release Date: {album.release_date}</div>
                    {/* <img src={album.images[0].url} alt="Album Cover" /> */}
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AlbumModal;
