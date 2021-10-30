const fs = require("fs")

// fs.writeFile("bio.txt", "Today is awesome day.", (err)=>{
//     console.log("file is created.");
//     console.log(err);
// });

// fs.appendFile("bio.txt", "\n Data append successfully in existing file,",
// (err)=>{
//     console.log("Data added successfully.!!!");
// })

fs.readFile("bio.txt", "UTF-8",(err,data)=>{
    console.log(data);
})