module.exports = async function() {
    const { promisify } = require("util");
    const fs = require("fs");
    const readfile = promisify(fs.readFile);
    //   readfile("./01.node.js").then(data => {
    //     console.log("promise======", data.toString());
    //   });
    const data = await readfile("./test.txt");
    console.log("await========", data.toString());
};
