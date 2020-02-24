module.exports = {
    getStat: function() {
        const cpuStat = require("cpu-stat");

        cpuStat.usagePercent((err, percent) => {
            console.log(`cpu占用率${percent}%`);
        });
    }
};
