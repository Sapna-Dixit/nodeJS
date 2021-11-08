const chalk =  require("chalk");
const validator = require("validator");


// console.log(chalk.blue("Hello world!!"));
// console.log(chalk.blue.italic("Hello world!!"));
// console.log(chalk.red("Hello JAVA"));
// console.log(chalk.yellow("Hello node js"));
// console.log(chalk.blue.underline("How are you."));
// console.log(chalk.blue.underline.inverse("false"));


const res = validator.isEmail("andrew@gmail.m");
//console.log(res);
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));