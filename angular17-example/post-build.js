const fs = require("fs-extra");
fs.moveSync("dist/browser", "../build/angular17-example", { overwrite: true });
