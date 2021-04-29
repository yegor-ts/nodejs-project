require('dotenv').config({ path: '../.env' })

const http = require('http');

const router = require('./routing');

const DbFileManage = require('./lib/DbFileManager');
const User = require('./modules/user/user.model');

const {NODE_HOST, NODE_PORT, pathToDir} = require('./lib/config');

const HOST = NODE_HOST;
const PORT = NODE_PORT;

const user = new User();
const dbFileManager = new DbFileManage(pathToDir, user);

const asyncInit = async () => {
    await dbFileManager.init();
}

asyncInit();

const server = http.createServer((req, res) => {
    router.handleRequest(req, res);
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});