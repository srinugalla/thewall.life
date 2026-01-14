# thewall.life

A cloud-native message wall application built to demonstrate modern DevOps practices using Docker, Kubernetes, and CI/CD.

## Features
- Post anonymous or named messages
- REST API backend
- Containerized frontend & backend
- Kubernetes-ready architecture

## Tech Stack
- Frontend: React
- Backend: FastAPI (Python)
- Database: SQLite (dev), PostgreSQL (prod-ready)
- CI/CD: Jenkins
- Containers: Docker
- Orchestration: Kubernetes

## Architecture
Frontend → Backend API → Database

## Getting Started (Local)
```bash
docker-compose up
