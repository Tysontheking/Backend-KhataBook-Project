// let arr = [1,2,3,4]
// console.log(typeof(arr));

// arr.forEach(function(val){
//     console.log(typeof(val+2))
// })

// map

// let arr = [1,2,3,4]

//  let newarr = arr.map(function(val){
//     return val
// })

// console.log(typeof(newarr));

// find

// let arr = [1,2,3]

// const find = arr.find(function(val){
//     if(val === 12)
//         return val
// })

// console.log(find);

// fs module

const fs = require("fs");

// fs.writeFile('file.txt','hlo satyam kaise ho',function(err){
//     if(err) console.error(err);
//     else{
//         console.log('file created')
//     }

// })

// fs.appendFile('file.txt'," mein badhiya hu ap batao",function(err){
//     if(err) console.error(err);
//     else{
//         console.log('file appended')
//     }
// })

// fs.rename('file.txt','NewFile.txt',function(err){
//     if(err) console.error(err);
//     else{
//         console.log('file renamed')
//     }
// })

// fs.writeFile('helo.html',"helo",function(err){
//     if(err) console.error(err);
//     else{
//         console.log('file created')
//     }
// })

// fs.copyFile('NewFile.txt','./Copy/CopyData.txt',function(err){
//     if(err) console.error(err);
//     else{
//         console.log('file copied')
//     }
// })

// fs.unlink('NewFile.txt',function(err){
//     if(err) console.error(err);
//     else{
//         console.log('file deleted')
//     }
// })

// fs.unlink('script.js',function(err){
//     if(err) console.error(err);
//     else{
//         console.log('file deleted')
//     }
// })

// console.log("sahdasldjk");

// let http = require('http')

// let server = http.createServer((req,res)=>{
//         res.end("helo")

// })

// server.listen(3000)

let express = require("express");
let app = express();

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("helo");
});

app.get("/profile", (req, res,next) => {
          res.sed("profile page");
        return next(Error("Something went wrong"))
});

app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke!')
      })

app.listen(3000);
