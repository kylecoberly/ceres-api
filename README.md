# Ceres API

API for Ceres, the staff management app.

## Setup

1. `yarn` or `npm install
1. Copy `.env.example` to `.env` and replace the values
1. `knex migrate:latest && knex seed:run` to populate the database
1. `npm run dev` to run locally

## Endpoints

GET /api/v1/instructors
GET /api/v1/instructors/:id
GET /api/v1/workshop-schedules
GET /api/v1/workshop-schedules/:id
GET /api/v1/workshop-schedule-weeks
GET /api/v1/workshop-schedule-weeks/:id
GET /api/v1/workshop-schedule-days
GET /api/v1/workshop-schedule-days/:id
