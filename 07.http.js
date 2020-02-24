module.exports = function() {
    const http = require("http");
    const fs = require("fs");
    const server = http.createServer((req, res) => {
        const { url, method, headers } = req;
        console.log(req);
        if (url === "/" && method === "GET") {
            fs.readFile("./index.html", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end(res.statusMessage);
                }
                res.end(data);
            });
        } else if (url === "/user" && method === "GET") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(JSON.stringify({ name: "cyy" }));
        }
        /* else if (
            method === "GET" &&
            headers.accept.indexOf("image/*") !== -1
        ) {
            fs.createReadStream("." + url).pipe(res);
        } */
    });
    server.listen(3003, () => {
        console.log("listen on 3003");
    });
};
``;
