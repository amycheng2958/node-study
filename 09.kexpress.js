const http = require("http");
const url = require("url");
let router = [];
class Application {
    get(path, handler) {
        router.push({
            path,
            method: "get",
            handler
        });
    }
    post() {
        router.push({
            path,
            method: "post",
            handler
        });
    }
    listen() {
        const server = http.createServer((req, res) => {
            const { pathname } = url.parse(req.url, true);
            for (const item of router) {
                const { path, method, handler } = item;
                if (pathname === path && req.method.toLowerCase() === method) {
                    return handler(req, res);
                }
            }
        });
        server.listen(...arguments);
    }
}

module.exports = function() {
    return new Application();
};
