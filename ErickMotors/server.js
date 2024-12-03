import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;

console.log('Starting server...');
console.log(`PORT environment variable: ${process.env.PORT}`);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.send('OK');
});

// Handle all routes by serving index.html (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server with explicit port binding
const server = app.listen(port, '0.0.0.0', () => {
  const addr = server.address();
  console.log(`Server is running on port ${addr.port}`);
  console.log(`Address: ${addr.address}`);
  console.log(`Full address: ${JSON.stringify(addr)}`);
});
