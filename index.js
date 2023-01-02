const fs=require("fs");
const http=require("http");
const { Http2ServerRequest } = require("http2");
console.log("hey");
var a=10;
var b=[34,56,87,5];
const c=40;
console.error(a/c);
console.warn(...b);
fs.writeFileSync("abc.txt","changing the text");
http.createServer((req,res)=>{
    res.write("<br><hr><h1>Checking Server</h1>");
    res.end();
}).listen(4500);

