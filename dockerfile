FROM node:20.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "start"]
