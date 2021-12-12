FROM node:alpine-14

LABEL maintainer="Ismael Alves <cearaismael1997@gmail.com>"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Port
EXPOSE 8080

CMD [ "npm", "start" ]