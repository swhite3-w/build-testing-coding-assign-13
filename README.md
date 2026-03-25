# Docker Run Instructions

These instructions will run the site on **localhost:8083 (127.0.0.1:8083)** using Docker.
Make sure Docker is installed and running before starting.

Run all commands from the project root (where the Dockerfile is located).

Build the Docker image:
docker build -t ui-library .

Run the container:
docker run --rm --name white_sakaria_coding_assignment12 -p 8083:3000 ui-library

This maps container port 3000 to host port 8083.

Open the application in your browser:
http://127.0.0.1:8083

If you make changes and need to rebuild:
docker build --no-cache -t ui-library .
docker run --rm --name white_sakaria_coding_assignment12 -p 8083:3000 ui-library