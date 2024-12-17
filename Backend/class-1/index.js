const math = require("./math");
const fs=require("fs");

console.log(math.sum(5,6));
console.log(math.sub(11,6));
console.log(math.mul(5,6));
console.log(math.div(6,2));


console.log(fs);
fs.writeFileSync("notes.txt","I'm Learning Backend\n");
//append : add the string and the end of file
fs.appendFileSync("notes.txt","It's a part of MERN")

//read
// const data=fs.readFileSync("notes.txt");
// console.log(data);
// console.log(data.toString)
// //fs.mkdirSync("AO")
// //fs.renameSync("bbsr.js","arithmatic")
// fs.rmdirSync("arithmatic")