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

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);
    const [showModal, setShowModal] = useState(false);
    // Search
    function search() {
        fetch(`http://localhost:8000/api/artists/${searchInput}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                let albums_with_dupes = data.items;
                // const uniqueAlbums = Array.from(new Set(albums_with_dupes));
                const seen = new Set();
                const uniqueAlbums = albums_with_dupes.filter((album) => {
                    const duplicate = seen.has(album.name);
                    seen.add(album.name);
                    return !duplicate;
                });
                setAlbums(uniqueAlbums);
            });
        // Display those albums to the user
        // console.log(albums);
    }
    return (
        <div className="App" style={{ marginTop: "30px" }}>
            <Container>
                <InputGroup className="mb-3" size="lg">
                    <FormControl
                        placeholder="Search For Artist"
                        type="input"
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                search();
                            }
                        }}
                        onChange={(event) => setSearchInput(event.target.value)}
                    />
                    <Button onClick={search}>Search</Button>
                </InputGroup>
            </Container>
            <Container>
                <Row className="mx-2 row row-cols-4">
                    {albums.map((album, i) => {
                        return (
                            <Card
                                key={album.id}
                                variant="primary"
                                onClick={() => setShowModal(true)}
                                style={{
                                    padding: "0px",
                                    marginBottom: "20px",
                                }}>
                                {/* <Card.Img src={album.images[0].url} /> */}
                                {/* <Card.Body>
                                    <Card.Title>{album.name}</Card.Title>
                                </Card.Body> */}
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
