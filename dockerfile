FROM node:20-alpine AS build

WORKDIR /white_sakaria_ui_garden

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm run build-storybook

FROM nginx:1.27-alpine

WORKDIR /white_sakaria_ui_garden

COPY --from=build /white_sakaria_ui_garden/storybook-static/ ./

RUN rm /etc/nginx/conf.d/default.conf && \
    printf '%s\n' \
    'server {' \
    '  listen 8083;' \
    '  server_name localhost;' \
    '  root /white_sakaria_ui_garden;' \
    '  index index.html;' \
    '  location / {' \
    '    try_files $uri $uri/ /index.html;' \
    '  }' \
    '}' \
    > /etc/nginx/conf.d/ui-garden.conf

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]