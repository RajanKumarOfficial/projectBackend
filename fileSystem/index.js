//first of all require the file and hold the value ;

const fs = require('fs');

// console.log("Read Start");

//  ## Asyncronouse way to read the file ==> 
// jisme ki ek scope ke under kaam kiya jata hai 

// file ko Read karne ka mathod ==> readFile('fileName', function (){});
/* 
fs.readFile('index.txt', function(erroe, data) {
    
   if(erroe) {
        console.log("Error : ", erroe);
        return erroe;

   }
   console.log("Data : ", data.toString());

   console.log("Read End");
   return data;

})

console.log("Other Stuff");


console.log(" #############################################");

// 

// synronouse way to read the data;

console.log("Read Start ");

 const data = fs.readFileSync('index.txt');
 console.log("data : ", data.toString());

 console.log('Read End');

 console.log("other stuff");

 */

 // =========================== Another Method of the File System  ================================================
// Data ke file ko open karo 

/* 

fs.open('index.txt', 'r+' , function(err, fd) {
    if(err) {
        console.log("file opeing error  : ");
        return err;
    }
    console.log("File open Susessfully : ");
    

    // Ab data ko Rea karo 

    let buf = new Buffer(1002);


fs.read(fd, buf, 0, buf.length, 0, function (Error, byte) {

    if(Error) {

        console.log("Error Show for read file ", Error);
   
    }
    console.log("Data of BYte form : ",byte);
    console.log('Data : ',buf.slice(0,byte).toString());


})
} )

*/