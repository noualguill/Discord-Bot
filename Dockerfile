FROM node:15.3

WORKDIR /usr/scr/app


COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx","nodemon"]