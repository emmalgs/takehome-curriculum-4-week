from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"], allow_methods=["*"], allow_headers=["*"])

# TODO: Item model, in-memory list, seed data

@app.get("/items")
def list_items(category: Optional[str] = None):
    pass  # TODO

@app.get("/items/{item_id}")
def get_item(item_id: int):
    pass  # TODO

@app.post("/items", status_code=201)
def create_item(item: dict):
    pass  # TODO
