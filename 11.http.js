const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(res.statusMessage);
            }
            res.end(data);
        });
    } else if (req.url === "/user" && req.method === "GET") {
        // res.setHeader("Access-Control-Allow-origin", "http://127.0.0.1:8080");
        res.end(JSON.stringify({ name: "cyy" }));
    }
});
server.listen(3000, () => {
    console.log("listen on 3000");
});
