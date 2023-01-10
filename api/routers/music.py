from queries.music import MusicIn
from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel


router = APIRouter()


@router.get("/api/music/{music_id}", response_model=MusicIn)
artistID =



@router.get('api/music/{artist_id}', response_model= MusicQueries = Depends()):
    pass
