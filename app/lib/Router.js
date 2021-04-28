const routing = require('../routing');

const {formatUrlPathname} = require('../util/url');


class Router {
    constructor() {
        this.routes = routing;
    }

    get(url, handler) {
        this.routes.push({url, handler, method: "GET"});
    }

    post(url, handler) {
        this.routes.push({url, handler, method: "POST"});
    }

    patch(url, handler) {
        this.routes.push({url, handler, method: "PATCH"});
    }

    delete(url, handler) {
        this.routes.push({url, handler, method: "DELETE"});
    }

    async handleRequest(req, res) {
        const {url, method} = req;

        const {handler} = this.routes.find( route => {
            return route.pathname === formatUrlPathname(url) && route.method === method
        });
        await handler(req, res);
    }
}

module.exports = Router;