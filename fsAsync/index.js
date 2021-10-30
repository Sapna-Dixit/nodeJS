const fs = require("fs")

fs.writeFile("bio.txt", "today is awesome day :)",(err)=>{
    console.log(err)
});