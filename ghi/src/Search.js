import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState, useEffect } from 'react';


function SearchBar() {
  const [ searchInput, setSearchInput] =useState('');
  const [albums, setAlbums] = useState([]);

// Search
function search() {

  var returnedAlbums = fetch(`http://localhost:8000/api/artists/${searchInput}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAlbums(data.items);
    });
  // Display those albums to the user
}
console.log(albums)

  return (
    <div className="App">
      <Container>
        <InputGroup className='mb-3' size='lg'>
          <FormControl
          placeholder='Search For Artist'
          type='input'
          onKeyDown={event => {
            if (event.key == 'Enter') {
              search();
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={search} style={{backgroundColor: "#c69f3a", border: "2px solid black"}}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4'>
          {albums.map( ( album, i) => {
            console.log(album);
            return (
        <Card>
          <Card.Img src={album.images[0].url} />
          <Card.Body>
            <Card.Title>{album.name}</Card.Title>
          </Card.Body>
        </Card>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}


export default SearchBar;
