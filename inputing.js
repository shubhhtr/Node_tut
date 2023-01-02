const process=require('process');
const fs=require('fs');

const inp=process.argv;

if(inp[2]=='create'){
    fs.writeFileSync(inp[3],inp[4]);
}
else if(inp[2]=='delete'){
    fs.unlinkSync(inp[3]);
}
else{
    console.log('invalid input');
}