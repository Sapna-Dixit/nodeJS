const bioData = {
    name : "Ramlal",
    age  : 35,
    city : "Banglore"
};

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);

console.log(objData);