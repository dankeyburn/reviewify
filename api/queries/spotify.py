import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
# from secrets import SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI


SPOTIPY_CLIENT_ID='ff1b739424b04c5caaf1bdbd554266b0'
SPOTIPY_CLIENT_SECRET='e9b9556ce74d4abf963c8ef016b45c72'
SPOTIPY_REDIRECT_URI='https://musicreviewify.com/callback/'


client_credentials_manager = SpotifyClientCredentials(client_id=SPOTIPY_CLIENT_ID, client_secret=SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager = client_credentials_manager)

class SpotifyQueries:
    def get_artist(self, name: str):
        results = sp.search(name, type="artist")
        artist_id = results['artists']['items'][0]['id']
        artist_albums = sp.artist_albums(artist_id)
        return artist_albums
