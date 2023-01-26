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
                        <div
                            style={{
                                textAlign: "center",
                                fontSize: "20px",
                                marginBottom: "20px",
                            }}>
                            {artist}
                        </div>
                        <div>Release Date: {album.release_date}</div>
                        <div>Label: {album.label}</div>
                        <RelatedArtists
                            artist_id={props.artist_id}
                            artist={artist}
                        />
                    </div>
                    <div
                        style={{
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
                            gridArea: "3 / 3 / 6 / 6",
                        }}>
                        <div
                            style={{
                                textAlign: "center",
                                marginBottom: "10px",
                            }}>
                            Tracks
                        </div>
                        <ol
                            style={{
                                height: "400px",
                                width: "100%",
                                overflow: "hidden",
                                overflowY: "scroll",
                            }}>
                            {album.tracks?.items.map((track) => {
                                return <li key={track.id}>{track.name}</li>;
                            })}
                        </ol>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            marginTop: "20px",
                            marginLeft: "60px",
                        }}>
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
                                    style={{ width: "100px", height: "60px" }}
                                    type="button"
                                    className="btn btn-primary btn-sm">
                                    Review
                                </Button>
                            </NavLink>
                        ) : (
                            <></>
                        )}

                        <NavLink
                            style={{
                                color: "#3f72af",
                                textDecoration: "none",
                            }}
                            to="/reviews"
                            state={{ id: props.album_id }}>
                            <Button
                                style={{ width: "100px", height: "60px" }}
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
