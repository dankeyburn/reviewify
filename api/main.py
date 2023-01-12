from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import accounts, reviews, spotify
from authenticator import authenticator

app = FastAPI()

origins = ["*"]

app.include_router(accounts.router, tags=['accounts'])
app.include_router(reviews.router, tags=['reviews'])
app.include_router(authenticator.router, tags=['authenticator'])
app.include_router(spotify.router, tags=['spotify'])
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
