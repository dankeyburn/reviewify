from fastapi import FastAPI

from routers import users, reviews

app = FastAPI()

app.include_router(users.router, tags=['users'])
app.include_router(reviews.router, tags=['reviews'])
