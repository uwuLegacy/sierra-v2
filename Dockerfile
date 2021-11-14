FROM node:16 AS builder

# Install pnpm :3
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Create app directory
WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma/

# Install app dependencies
RUN pnpm install --frozen-lockfile --prod

# Bundle app source
COPY . .

# Build app
RUN npm run build

# Start app in production mode
CMD [ "pnpm", "run", "start:prod" ]