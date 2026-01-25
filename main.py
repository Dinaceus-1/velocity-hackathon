from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import re

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    email: str
    password: str

def valid_password(password: str):
    return (
        len(password) >= 8
        and re.search(r"[A-Za-z]", password)
        and re.search(r"[0-9]", password)
    )

@app.post("/login")
def login(data: LoginRequest):
    if not data.email:
        raise HTTPException(status_code=400, detail="Email required")

    if not valid_password(data.password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain letters & numbers"
        )

    return {"success": True}

