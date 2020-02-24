module.exports = async function() {
    const fs = require("fs");
    fs.readFile("./test.txt", (err, data) => {
        console.log("fs======", data.toString());
    });
};
