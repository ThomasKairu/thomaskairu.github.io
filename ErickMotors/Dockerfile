FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Set environment variables
ENV PORT=10000
ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE ${PORT}

# Install production dependencies only
RUN yarn install --production

# Start the Express server
CMD ["yarn", "start"]
