from fastapi import APIRouter, Depends
from queries.spotify import SpotifyQueries

router = APIRouter()

@router.get('/api/artists/{id}')
def get_artist(id: str, repo: SpotifyQueries = Depends()):
    return repo.get_artist(id)
