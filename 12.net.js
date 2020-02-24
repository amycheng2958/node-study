const net = require("net");
const server = net.createServer();
const chatList = [];
server.on("connection", client => {
    client.write("hi");
    chatList.push(client);
    client.on("data", data => {
        chatList.forEach(v => {
            v.write(data);
        });
    });
});

server.listen(9000);
