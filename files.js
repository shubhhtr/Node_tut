const fs=require('fs');
const path=require('path');

const fol=path.join(__dirname,'dummy');
console.warn(fol);

// for(var i=0;i<6;i++){
//     //fs.unlinkSync(fol+`newfile${i+1}`);
//     fs.writeFileSync(fol+`/newfile${i+1}`,`this is the dummy text of file ${i+1}`);
// }

fs.readdir(fol,(err,files)=>{
    //console.log(...files);
    files.forEach((items)=>{
        console.error(items);
    })
})