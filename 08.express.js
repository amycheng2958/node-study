const express = require("./09.kexpress");
const app = express();
app.get("/", (req, res) => {
    res.end("hello");
});
app.get("/user", (req, res) => {
    res.end(JSON.stringify({ name: "cyy" }));
});

app.listen("3004", () => {
    console.log("listen on 3004");
});
