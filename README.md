thewall.life

thewall.life is a lightweight, containerized message wall application designed to demonstrate modern DevOps practices, clean service separation, and CI/CD automation using Docker and Jenkins.

The project intentionally keeps the application logic simple while focusing on infrastructure, deployment, and operational correctness.

🚀 Features

Anonymous or named message posting

Featured message + recent posts view

RESTful backend API

Stateless frontend, API-driven UI

Health checks for service monitoring

CI/CD pipeline with Jenkins

Dockerized for consistent local and server deployments

🧱 Tech Stack
Application

Frontend: React (served via Nginx)

Backend: FastAPI (Python)

Database: SQLite (development & small-scale deployments)

DevOps / Infrastructure

Containerization: Docker, Docker Compose

CI/CD: Jenkins (Pipeline as Code)

Web Server: Nginx

Version Control: GitHub

Deployment Model: Single-host Docker (production-ready baseline)

🏗 Architecture Overview
Browser
   ↓
Nginx (Frontend)
   ↓
FastAPI Backend
   ↓
SQLite Database


Frontend communicates with backend via REST API

Backend exposes health endpoint for monitoring

Services are isolated and networked via Docker Compose

Environment variables control service configuration

📁 Repository Structure
thewall.life/
├── frontend/        # React app + Nginx config
├── backend/         # FastAPI app, models, DB config
├── docker-compose.yml
├── Jenkinsfile      # CI/CD pipeline
└── README.md

⚙️ Local Development
Prerequisites

Docker

Docker Compose

Git

Run locally
docker compose up --build


Services:

Frontend: http://localhost:3000

Backend: http://localhost:8000

Health check: http://localhost:8000/health

🔄 CI/CD Pipeline (Jenkins)

The project uses Jenkins Pipeline as Code.

Pipeline stages:

Source checkout from GitHub

Docker image build

Container deployment via Docker Compose

A single push to main triggers:

Automated build

Container restart

Application redeploy

This setup mirrors real-world small-team production pipelines.

🔐 Configuration

Key environment variables:

Variable	Description
REACT_APP_API_URL	Backend API base URL
DATABASE_URL	Database connection string

Configured via:

docker-compose.yml

Jenkins environment

🩺 Health & Stability

Backend exposes /health endpoint

Docker healthchecks used for service readiness

Frontend served via Nginx for stability and performance

📈 Production Notes

SQLite is sufficient for low traffic and demos

Architecture supports easy migration to PostgreSQL

Can be extended with:

Reverse proxy (Nginx / Traefik)

HTTPS (Let’s Encrypt)

Kubernetes deployment

Persistent volumes for database

🛠 Future Improvements

Authentication (optional, privacy-first)

Rate limiting

Message moderation tools

PostgreSQL support

Kubernetes manifests / Helm chart

Observability (logs, metrics)

👷 Author Notes

This project is built with a DevOps-first mindset:

Clear service boundaries

Repeatable deployments

Minimal manual steps

Infrastructure treated as code

It is intentionally simple in functionality but solid in execution.
