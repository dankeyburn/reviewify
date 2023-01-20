import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Row,
    Card,
} from "react-bootstrap";
import { useState } from "react";
import AlbumModal from "./AlbumModal";
import React, { useContext } from "react";
// import "./style.css";
import { Context } from "./Store";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);
    const [text, setText] = useState("");
    const [state, dispatch] = useContext(Context);

    const updateText = () => {
        dispatch({ type: "update_text", payload: text });
        setText("");
    };

    function search() {
        fetch(`http://localhost:8000/api/artists/${searchInput}`)
            .then((response) => response.json())
            .then((data) => {
                let albums_with_dupes = data.items;
                const seen = new Set();
                const uniqueAlbums = albums_with_dupes.filter((album) => {
                    const duplicate = seen.has(album.name);
                    seen.add(album.name);
                    return !duplicate;
                });
                setAlbums(uniqueAlbums);
            });
    }
    function Display() {
        document.getElementById("hide-item1").style.display = "none";
        document.getElementById("hide-item2").style.display = "none";
    }

    return (
        <div className="App" style={{ marginTop: "30px" }}>
            <div>
                <h1>Global State without Redux!</h1>

                <section>
                    <p>You can increment/decrement count</p>
                    <p>count: {state.count}</p>
                    <button onClick={() => dispatch({ type: "increment" })}>
                        +
                    </button>
                    <button onClick={() => dispatch({ type: "decrement" })}>
                        -
                    </button>
                </section>

                <section>
                    <p>text: {state.text}</p>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button onClick={updateText}>update text</button>
                </section>
            </div>

            <Container>
                <InputGroup className="mb-3" size="lg">
                    <FormControl
                        placeholder="Search For Artist"
                        type="input"
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                search();
                                Display();
                            }
                        }}
                        onChange={(event) => setSearchInput(event.target.value)}
                    />
                    <Button
                        onClick={search}
                        style={{ border: "2px solid #efeee8" }}>
                        Search
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                <Row className="mx-2 row row-cols-4">
                    {albums.map((album, i) => {
                        return (
                            <Card
                                key={album.id}
                                variant="primary"
                                style={{
                                    padding: "0px",
                                    marginBottom: "20px",
                                }}>
                                <AlbumModal
                                    album_id={album.id}
                                    img_url={album.images[0].url}
                                    album_name={album.name}
                                />
                            </Card>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}
