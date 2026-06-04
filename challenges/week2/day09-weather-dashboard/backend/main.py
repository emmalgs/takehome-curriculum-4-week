import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"], allow_methods=["*"], allow_headers=["*"])

API_KEY = os.getenv("OPENWEATHER_API_KEY", "")
USE_MOCK = os.getenv("USE_MOCK", "false").lower() == "true"

MOCK_DATA = {
    "city": "Mock City",
    "temp": 22,
    "description": "Partly cloudy",
    "humidity": 65,
    "forecast": [
        {"day": "Mon", "temp": 22, "description": "Sunny"},
        {"day": "Tue", "temp": 19, "description": "Cloudy"},
        {"day": "Wed", "temp": 17, "description": "Rainy"},
        {"day": "Thu", "temp": 21, "description": "Partly cloudy"},
        {"day": "Fri", "temp": 24, "description": "Sunny"},
    ]
}

@app.get("/weather")
async def get_weather(city: str):
    if USE_MOCK:
        return {**MOCK_DATA, "city": city}
    # TODO: call OpenWeatherMap API
    # Keep the API key server-side — never expose it to the frontend
    # GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
    # GET https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
    pass
