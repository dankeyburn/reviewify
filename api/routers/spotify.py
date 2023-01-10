from fastapi import APIRouter, Depends
from queries.spotify import SpotifyQueries

router = APIRouter()

@router.get('/api/artists/{name}')
def get_artist(name: str, repo: SpotifyQueries = Depends()):
    return repo.get_artist(name)
