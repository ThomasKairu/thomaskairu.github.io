import http from 'http';

const port = process.env.PORT || 10000;

console.log('Starting server...');
console.log(`PORT environment variable: ${process.env.PORT}`);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running');
});

server.listen(port, '0.0.0.0', () => {
    const addr = server.address();
    console.log('Server running at:');
    console.log(`- Port: ${addr.port}`);
    console.log(`- Address: ${addr.address}`);
    console.log(`- Family: ${addr.family}`);
});
