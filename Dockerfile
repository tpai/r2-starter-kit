FROM node:10-alpine

WORKDIR /app

# Install git, autoreconf and png library
RUN apk update && \
  apk add --no-cache autoconf automake build-base nasm && \
  apk add --no-cache libpng-dev

COPY package.json /app
COPY yarn.lock /app

# Install dependencies
RUN yarn install --production

# Add required assets
COPY dist /app
COPY server.js /app

EXPOSE 8080
CMD ["yarn", "start"]
