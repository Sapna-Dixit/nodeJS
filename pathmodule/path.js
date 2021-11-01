const path  = require("path");
console.log(path.dirname("/home/webiwork51/Documents/nodeJS/fsAsync/pathmodule/path.js"));
console.log(path.extname("/home/webiwork51/Documents/nodeJS/fsAsync/pathmodule/path.js"));
console.log(path.basename("/home/webiwork51/Documents/nodeJS/fsAsync/pathmodule/path.js"));
console.log(path.parse("/home/webiwork51/Documents/nodeJS/fsAsync/pathmodule/path.js"));

const  myPath = path.parse("/home/webiwork51/Documents/nodeJS/fsAsync/pathmodule/path.js");
console.log(myPath.name);
console.log(myPath.root);
