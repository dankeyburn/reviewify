import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../UseToken";
import { Context } from "../Store";
import { useContext } from "react";
import RelatedArtists from "./RelatedArtists";

function AlbumModal(props) {
    const [show, setShow] = useState(false);
    const [album, setAlbum] = useState([]);
    const { token } = useAuthContext();
    const [state, dispatch] = useContext(Context);
    const [artist, setArtist] = useState("");

    async function search() {
        fetch(
            `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/albums/${props.album_id}`
        )
            .then((response) => response.json())
            .then((data) => {
                setAlbum(data);
                setArtist(data.artists[0]["name"]);
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
                </Modal.Header>
                <Modal.Body className="album-modal-body">
                    <div className="album-modal-body-div1">
                        <div className="album-modal-body-div2">
                            {album.name}
                        </div>
                        <div className="album-modal-body-div3">{artist}</div>
                        <div>Release Date: {album.release_date}</div>
                        <div
                            style={{ marginTop: "15px", marginBottom: "15px" }}>
                            Label: {album.label}
                        </div>
                        <RelatedArtists
                            artist_id={props.artist_id}
                            artist={artist}
                        />
                    </div>
                    <div className="album-modal-body-div4">
                        <img
                            className="album-modal-img"
                            src={props.img_url}
                            alt=""
                        />
                    </div>
                    <div className="album-modal-body-div5">
                        <div className="album-modal-body-div6">Tracks</div>
                        <ol className="album-modal-body-ol">
                            {album.tracks?.items.map((track) => {
                                return <li key={track.id}>{track.name}</li>;
                            })}
                        </ol>
                    </div>

                    <div className="album-modal-body-div7">
                        {state.token ? (
                            <NavLink
                                to="/reviews/new"
                                state={{
                                    id: props.album_id,
                                    name: album.name,
                                    tracks: album.tracks?.items,
                                    img: props.img_url,
                                }}>
                                <Button
                                    type="button"
                                    className="btn btn-primary btn-sm">
                                    Review
                                </Button>
                            </NavLink>
                        ) : (
                            <></>
                        )}
                        <NavLink to="/reviews" state={{ id: props.album_id }}>
                            <Button
                                type="button"
                                className="btn btn-primary btn-sm">
                                See Reviews
                            </Button>
                        </NavLink>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AlbumModal;
