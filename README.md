# Express Template

A production-ready Express 5 + TypeScript starter with structured logging, request validation, and error handling baked in.

## Features

- **Express 5** with TypeScript (ESNext target, CommonJS modules)
- **Versioned API routing** (`/api/v1/...`) for clean API evolution
- **Zod validation** middleware for request schema enforcement
- **Winston logging** with daily-rotated log files, JSON format, and correlation ID tracking
- **Request correlation** via `AsyncLocalStorage` -- every log entry carries a unique request ID without manual threading
- **Custom error classes** (`NotFoundError`, `BadRequest`, `InternalServerError`, `UnImplemented`) with a global error handler
- **Environment config** via `dotenv`

## Project Structure

```
src/
├── config/
│   ├── index.ts                 # Env loading & server config
│   └── logger.config.ts         # Winston + daily rotate setup
├── controllers/
│   ├── ping.contoller.ts        # Ping handler
│   └── readFile.controller.ts   # File read handler
├── errors/
│   └── app.error.ts             # Custom error classes
├── routes/
│   ├── index.router.ts          # Top-level API router
│   └── v1/
│       ├── index.router.ts      # V1 router
│       ├── ping.routes.ts       # GET /api/v1/ping
│       └── readFile.routes.ts   # GET /api/v1/read
├── utils/
│   ├── correlation.utils.ts     # Correlation ID middleware
│   ├── error.util.ts            # Global error handler
│   └── requestContext.util.ts   # AsyncLocalStorage context
├── validators/
│   ├── ping.schema.ts           # Zod schemas
│   └── ping.validators.ts       # Validation middleware
└── index.ts                     # Entry point
```

## Setup

Clone the project

```bash
git clone https://github.com/singhsanket143/Express-Typescript-Starter-Project.git <ProjectName>
```

Move into the project directory

```bash
cd <ProjectName>
```

Install dependencies

```bash
npm i
```

Create a `.env` file in the root directory and add the `PORT` variable

```bash
echo PORT=3000 >> .env
```

Start the development server (hot reload via nodemon)

```bash
npm run back
```

## API Routes

| Method | Path            | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/`             | Health check        |
| GET    | `/api/v1/ping`  | Ping with validation |
| GET    | `/api/v1/read`  | Read file example   |

## Logging

Logs are written to both the console and daily-rotated files under `logs/`. Each entry includes:

- Timestamp
- Log level
- Correlation ID (auto-generated per request)
- Message and data payload

Log files rotate hourly, are capped at 20 MB each, and retained for 14 days.

## Tech Stack

| Package                      | Purpose                   |
| ---------------------------- | ------------------------- |
| express 5                    | Web framework             |
| typescript                   | Type safety               |
| zod                          | Schema validation         |
| winston + daily-rotate-file  | Structured logging        |
| uuid                         | Correlation ID generation |
| dotenv                       | Environment variables     |
| nodemon + ts-node            | Dev server                |
