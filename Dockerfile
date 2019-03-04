FROM node:8-alpine

WORKDIR /app

# Install git, autoreconf and png library
RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh && \
  apk add --no-cache autoconf automake build-base libtool nasm && \
  apk add --no-cache g++ make zlib-dev libpng-dev

COPY package.json /app
COPY yarn.lock /app

# Install dependencies
RUN yarn

# Add source code
COPY . /app

# Run build script
RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]
