FROM node:latest

LABEL version='1.0'
LABEL description='React Frontend for the Stock Advisor'

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]