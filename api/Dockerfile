FROM node:12
WORKDIR /app
COPY ./nodeWebApp/package*.json ./
RUN npm install
COPY ./nodeWebApp/ .
CMD [ "npm", "start" ]