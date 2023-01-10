from fastapi import APIRouter, Depends
from queries.spotify import SpotifyQueries

router = APIRouter()

@router.get('/api/artists/{name}')
def get_artist_albums(name: str, repo: SpotifyQueries = Depends()):
    return repo.get_artist_albums(name)

@router.get('/api/albums/{album_id}')
def get_album_details(album_id: str, repo: SpotifyQueries = Depends()):
    return repo.get_album_details(album_id)
