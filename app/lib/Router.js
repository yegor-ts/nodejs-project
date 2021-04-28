const {formatUrlPathname} = require('../util/url');


class Router {
    constructor() {
        this.routes = [];
    }

    get(pathname, handler) {
        this.routes.push({pathname, handler, method: "GET"});
    }

    post(pathname, handler) {
        this.routes.push({pathname, handler, method: "POST"});
    }

    patch(pathname, handler) {
        this.routes.push({pathname, handler, method: "PATCH"});
    }

    delete(pathname, handler) {
        this.routes.push({pathname, handler, method: "DELETE"});
    }

    async handleRequest(req, res) {
        const {url, method} = req;
        console.log()
        const {handler} = this.routes.find( route => {
            return route.pathname === formatUrlPathname(url) && route.method === method
        });
        await handler(req, res);
    }
}

module.exports = Router;