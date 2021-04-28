const http = require('http');

const userController = require('./modules/user/user.controller');

const httpConstants = http.METHODS;

const routing = [
    {
        method: "POST",
        pathname: "/user",
        handler: userController.signupUser
    },

    {
        method: "GET",
        pathname: "/user",
        handler: userController.getAllUsers
    },

    {
        method: "GET",
        pathname: "/user/:id",
        handler: userController.getUser,
    },

    {
        method: "PATCH",
        pathname: "/user/:id",
        handler: userController.updateUser,
    },

    {
        method: "DELETE",
        pathname: "/user/:id",
        handler: userController.deleteUser,
    },
];

module.exports = routing;