const fs =require('fs')

//creating a new file
fs.writeFileSync("read.txt","Welome to webiwork.");
fs.writeFileSync("read.txt", "Hello, how are you ?");

//append file

fs.appendFileSync("read.txt", "hii, I am fine thank you.");

const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);
var  org_data = buf_data.toString();
console.log(org_data);

fs.renameSync("read.txt", "readwrite.txt")

