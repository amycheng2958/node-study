const { getStat } = require("./02.cpustat");
const os = require("./03.os");
const readfile = require("./04.fs");
const readfile2 = require("./05.util");
const buffer = require("./06.buffer");
const http = require("./07.http");
// const http = require("http");
// const server = http.createServer((request, response) => {
//     console.log("there is a request");
//     response.end("a response from server");
// });
// server.listen(3003);
getStat();
os();
readfile();
readfile2();
buffer();
http();
