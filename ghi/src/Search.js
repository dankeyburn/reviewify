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

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);
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
    return (
        <div className="App">
            <Container>
                <InputGroup className="mb-3" size="lg">
                    <FormControl
                        placeholder="Search For Artist"
                        type="input"
                        onKeyDown={(event) => {
                            if (event.key == "Enter") {
                                search();
                            }
                        }}
                        onChange={(event) => setSearchInput(event.target.value)}
                    />
                    <Button
                        onClick={search}
                        style={{
                            backgroundColor: "#c69f3a",
                            border: "2px solid black",
                        }}>
                        Search
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                <Row className="mx-2 row row-cols-4">
                    {albums.map((album, i) => {
                        console.log(album);
                        return (
                            <Card>
                                <Card.Img src={album.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{album.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default SearchBar;
