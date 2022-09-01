FROM node:16-alpine3.13

RUN mkdir -p /urs/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "start"]
