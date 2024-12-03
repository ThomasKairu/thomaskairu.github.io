FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Set environment variables
ENV PORT=10000
ENV HOST=0.0.0.0
EXPOSE ${PORT}

# Start the application with explicit host binding
CMD serve -s dist -l tcp://${HOST}:${PORT}
