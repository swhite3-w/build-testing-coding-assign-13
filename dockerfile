# ---------- Build stage ----------
FROM node:20-alpine AS builder

ARG LAST_NAME=White
ARG FIRST_NAME=Sakaria

WORKDIR /${LAST_NAME}_${FIRST_NAME}_ui_garden_build_checks

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the production version of the app
RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine

ARG LAST_NAME=White
ARG FIRST_NAME=Sakaria

WORKDIR /${LAST_NAME}_${FIRST_NAME}_ui_garden_build_checks

# Install a lightweight static file server
RUN npm install -g serve

# Copy production build from builder
COPY --from=builder /${LAST_NAME}_${FIRST_NAME}_ui_garden_build_checks/build ./build

EXPOSE 8018

# Serve the production build on port 8018
CMD ["serve", "-s", "build", "-l", "8018"]