const fs = require('fs');

fs.appendFile('include.txt', "Hello Sir I am Rajan", "utf8", function(err) {
    if(err) {
        console.log("Error :", err);
        return err;

    }
    console.log("Successfuly Appended:");
})


fs.readFile('include.txt', function(Error , data ) {
    if(Error) {
        console.log("goting Eroror :", Error);
    }
    console.log("Data : ", data.toString());


   
})

fs.close(fd, function(ERRR){
    if(ERRR) {
        console.log("ERR", ERRR);
        return ERRR;
    }
    console.log("Successfuly Closed file ");
} )

  

