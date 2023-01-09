from fastapi import FastAPI

from routers import accounts, reviews, spotify
from authenticator import authenticator

app = FastAPI()

app.include_router(accounts.router, tags=['accounts'])
app.include_router(reviews.router, tags=['reviews'])
app.include_router(authenticator.router, tags=['authenticator'])
app.include_router(spotify.router, tags=['spotify'])
