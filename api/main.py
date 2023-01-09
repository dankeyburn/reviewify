from fastapi import FastAPI

from routers import accounts, reviews
from authenticator import authenticator

app = FastAPI()

app.include_router(accounts.router, tags=['accounts'])
app.include_router(reviews.router, tags=['reviews'])
app.include_router(authenticator.router, tags=['authenticator'])
