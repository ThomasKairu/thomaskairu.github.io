FROM node:18-alpine

WORKDIR /app

# Copy only what's needed for the server
COPY server.js package.json ./

# Install only production dependencies
RUN npm install --production

# Set environment variables
ENV PORT=10000
EXPOSE 10000

# Start the server
CMD ["node", "server.js"]
