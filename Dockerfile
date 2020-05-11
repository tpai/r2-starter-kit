FROM node:12-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install --frozen-lockfile --production

# Add required assets
COPY dist ./dist
COPY server.js .

EXPOSE 8080
CMD ["yarn", "start"]
