FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY src ./src
COPY public ./public
ENV NODE_OPTIONS=--max-old-space-size=512
RUN npm run build
RUN ls -l src && test -f src/App.js


FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
