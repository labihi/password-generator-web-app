# syntax=docker/dockerfile:1
#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/password-generator-app /usr/share/nginx/html


### TO RUN THE DOCKERFILE USE THE FOLLOWING COMMANDS
# docker build -t password-generator-app .
