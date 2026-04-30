const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.write("<h1>Hello Docker App 🚀 DevOps Project</h1>");
    res.write("<p>This web application is running inside a docker container</p>");

    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});