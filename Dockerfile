FROM node:18

# Create app directory
WORKDIR /usr/src

RUN npm install ajv
RUN npm install better-ajv-errors

COPY package.json /usr/src
COPY validate.js /usr/src
COPY json/* /usr/src/json/