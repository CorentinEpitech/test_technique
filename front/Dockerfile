FROM node:16-alpine3.13

RUN mkdir -p /urs/src/app
WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 

CMD ["npm", "start"]