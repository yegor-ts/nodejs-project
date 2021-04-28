const http = require('http');

const UserService = require('./user.service');

const userService = new UserService();

exports.signupUser = async (req, res) => {
    try {
        let user = "";
        await req.on('data', chunk => {
            user += chunk;
        });
        await userService.createUser(JSON.parse(user));
        res.end(http.STATUS_CODES[200]);
    } catch (e) {
        res.end(http.STATUS_CODES[204]);
    }
};

exports.getUser = async (req, res) => {
    try {
        const urlId = req.url.split('/')[2];
        const user = await userService.findUserById(urlId);
        res.end(JSON.stringify(user));
    } catch (e) {
        res.end(http.STATUS_CODES[204]);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const data = await userService.findAllUsers();
        res.end(JSON.stringify(data));
    } catch (e) {
        res.end(http.STATUS_CODES[204]);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const urlId = req.url.split('/')[2];
        let dataForUpdate = '';
        await req.on('data', chunk => {
            dataForUpdate += chunk;
        });
        const updatedUser = await userService.updateUserById(urlId, JSON.parse(dataForUpdate));
        res.end(JSON.stringify(updatedUser));
    } catch (e) {
        res.end(http.STATUS_CODES[204]);
    }
};

exports.deleteUser = async (req, res) => {
   try {
       const urlId = req.url.split('/')[2];
       await userService.deleteUserById(urlId);
       res.end(http.STATUS_CODES[200])
   } catch (e) {
       res.end(http.STATUS_CODES[204]);
   }
};