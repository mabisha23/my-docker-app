
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write("Hello Docker App 🚀 Mabisha");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});