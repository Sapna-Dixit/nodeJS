const fs = require("fs")

//Read file  using Synchronous

/*const x = fs.readFileSync("bio.txt", "utf-8");
console.log(x);
console.log("After the  data");*/

//Read file using Asynchronous

fs.readFile("bio.txt","UTF-8",(err,data)=>{
  console.log(data);
})
console.log("After the data");