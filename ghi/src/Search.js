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
    var returnedAlbums = fetch(
      `http://localhost:8000/api/artists/${searchInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAlbums(data.items);
      });
    // Display those albums to the user
  }
  // console.log(albums);

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
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, i) => {
            return (
              <Card variant="primary" onClick={() => setShowModal(true)}>
                <Card.Img src={album.images[0].url} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                </Card.Body>
                <AlbumModal album_id={album.id} />
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
