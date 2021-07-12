FROM node:14.17.3-alpine

WORKDIR '/app'

COPY ./package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

# serving production build via nginx

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html