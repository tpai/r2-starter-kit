FROM node:8-alpine

WORKDIR /app

# Install git, autoreconf and png library
RUN apk update && \
  apk add --no-cache autoconf automake build-base nasm && \
  apk add --no-cache libpng-dev

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
