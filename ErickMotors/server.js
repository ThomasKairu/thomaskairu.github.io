import express from 'express';

const app = express();
const port = process.env.PORT || 10000;

console.log('Starting server...');
console.log(`PORT environment variable: ${process.env.PORT}`);
console.log(`Using port: ${port}`);

// Basic health check
app.get('/health', (req, res) => {
    res.send('OK');
});

// Start server
const server = app.listen(port, '0.0.0.0', () => {
    const addr = server.address();
    console.log('Server running at:');
    console.log(`- Port: ${addr.port}`);
    console.log(`- Address: ${addr.address}`);
    console.log(`- Family: ${addr.family}`);
});
