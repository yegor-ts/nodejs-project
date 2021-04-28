require('dotenv').config({ path: '../.env' })

const http = require('http');

const Router = require('./lib/Router');

const {NODE_HOST, NODE_PORT} = require('./lib/config');

const HOST = NODE_HOST;
const PORT = NODE_PORT;


const router = new Router();

const server = http.createServer((req, res) => {
    router.handleRequest(req, res);
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});