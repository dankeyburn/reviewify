from pydantic import BaseModel
from typing import Optional, List, Union
from datetime import date
from queries.pool import pool
import os

class MusicQueries(BaseModel):
    def get_album_by_name(self, album: str):
        the_key = os.environment['SPOTIFY_KEY']
        res = requests.get(f'https://pokeapi.co/api/v2/pokemon/{album}')
        data = res.json()
        return data
