from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .database import Base

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=True)
    content = Column(String(280), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
