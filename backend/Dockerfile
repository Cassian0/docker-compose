FROM node:lts-alpine

WORKDIR /home/api

COPY package.json yarn.* ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]
