FROM node:18-alpine

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Set environment variables
ENV PORT=10000
EXPOSE 10000

# Start using npm start to ensure package.json script is used
CMD ["npm", "start"]
