import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from secrets import SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI


client_credentials_manager = SpotifyClientCredentials(client_id=SPOTIPY_CLIENT_ID, client_secret=SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager = client_credentials_manager)

class SpotifyQueries:
    def get_artist_albums(self, name: str):
        results = sp.search(name, type="artist")
        artist_id = results['artists']['items'][0]['id']
        artist_albums = sp.artist_albums(artist_id, limit = 50, country = "US", album_type = "album")
        return artist_albums

    def get_album_details(self, album_id: str):
        album_details = sp.album(album_id)
        del album_details["available_markets"]
        return album_details
