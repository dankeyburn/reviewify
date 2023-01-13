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
                setAlbum(data);
            });
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
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AlbumModal;
