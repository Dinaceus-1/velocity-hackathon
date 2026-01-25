from fastapi import FastAPI, Depends
from backend_impactex.db import get_conn
from backend_impactex.auth import router as auth_router
from backend_impactex.auth_verify import get_current_user_id
from backend_impactex.database1 import engine
from backend_impactex.models import Base

Base.metadata.create_all(bind=engine)

app = FastAPI(title="ImpactX Backend")

app.include_router(auth_router)

@app.get("/")
def root():
    return {"status": "Backend running 🚀"}

@app.get("/protected")
def protected(user_id: str = Depends(get_current_user_id)):
    return {"user_id": user_id}
