# Assignment 13 – UI Garden Build Checks

## Overview
This project extends the UI Component Library by adding automated code quality checks and containerizing the production build using Docker.

The application runs at:
http://localhost:8018

---

## Features
- Production build of React app served via Docker
- Husky pre-commit hooks
- Code quality checks:
  - Prettier
  - ESLint
  - Tests
- GitHub Actions CI to enforce checks on push/pull requests

---

## Pre-Commit Checks (Husky)

A pre-commit hook prevents commits if any of the following fail:

```bash
npm run format:check
npm run lint
npm run test -- --watchAll=false
```

Location:

.husky/pre-commit

## GitHub Actions

A CI workflow ensures checks run even if Husky is bypassed.

File:
.github/workflows/ci.yml

Runs:

-Prettier check
-ESLint
-Tests
-Build

## Docker Setup

Build Image
```bash
docker build -t white_sakaria_coding_assignment13 .
```

Run Container
```bash
docker run -d -p 8018:8018 \
  --name White_Sakaria_coding_assignment13 \
  white_sakaria_coding_assignment13
```

## Access the Application

Open:
http://localhost:8018

## Notes
- Container name: White_Sakaria_coding_assignment13
- Working directory inside container: White_Sakaria_ui_garden_build_checks
- App runs on port 8018 as required