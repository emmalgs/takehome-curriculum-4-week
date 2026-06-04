from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# TODO: define Movie model
# class Movie(BaseModel):
#     id: int
#     title: str
#     year: int
#     genre: str
#     rating: float

# TODO: seed movies list (at least 8 movies)
movies = []

@app.get("/movies")
def list_movies(q: Optional[str] = None):
    # TODO: return all movies; filter by title if q provided
    pass

@app.get("/movies/{movie_id}")
def get_movie(movie_id: int):
    # TODO: return movie or 404
    pass
