const os=require("os");
console.log(os.arch());
console.log(os.freemem()); // (IN BYTES) Total free RAM memory
console.log(os.freemem()/(1024*1024)); //IN MB
console.log(os.freemem()/(1024*1024*1024)); //IN GB
console.log(os.totalmem()/(1024*1024*1024)); //Total RAM memory
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());