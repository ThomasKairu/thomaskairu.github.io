import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 10000;
const host = '0.0.0.0';

// Start server and log the actual host and port being used
const server = app.listen(port, host, () => {
  const serverAddress = server.address();
  console.log(`Server is running on http://${serverAddress.address}:${serverAddress.port}`);
});
