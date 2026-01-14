from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from .database import SessionLocal, engine
from .models import Base, Message

Base.metadata.create_all(bind=engine)

app = FastAPI(title="thewall.life API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/messages")
def get_messages(db: Session = Depends(get_db)):
    messages = (
        db.query(Message)
        .order_by(Message.created_at.desc())
        .limit(50)
        .all()
    )
    return messages


# 👇 JSON request body
class MessageCreate(BaseModel):
    content: str
    username: str = "anonymous"


@app.post("/messages")
def post_message(
    payload: MessageCreate,
    db: Session = Depends(get_db),
):
    msg = Message(
        content=payload.content,
        username=payload.username,
    )
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg
