FROM node:18-alpine

WORKDIR /app

# Copy all files
COPY . .

# Install dependencies and build
RUN yarn install
RUN yarn build

# Set environment variables
ENV PORT=10000
ENV NODE_ENV=production
EXPOSE 10000

# Start the server directly with node
CMD node server.js
