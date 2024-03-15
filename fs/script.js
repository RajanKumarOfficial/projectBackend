const { log } = require("console");
const fs = require("fs");


// Read the data from index.txt 

// Asynchronouse Way to Read Data 

/* 

fs.readFile('index.txt', function(err , data) {

    if(err) {
        console.log("I got Error : ",err);
        return err;
    }
    console.log("I got the data : ", data.toString());
    return data;
})


        /// Using Sysnchronous way for read the data 

       const Syndata =  fs.readFileSync('index.txt');

       console.log("Synchronuse data : ", Syndata.toString());
       
 

       // Open the file 

       fs.open('index.txt','r+',function(error , fd) {
            if(error) {
                console.log("I got Error");
                return error;
            }
            console.log("File open successfully : ");


        // read the opened File 

        fs.readFile(fd, function(err, data) {
            if(err) {
                console.log("i got error : ", err);
                return err;

            }
            console.log("This opend Data ", data.toString());
            return data;

        })
       })    
         

       // using open sysnchrounus way through opening the file ==> always recive in the bytes form 

      const opendata =  fs.openSync('index.txt');
      // yaha per data hamko bytes ke form me milta hai  exple : 16 or 18, 15 ;

      console.log( "Open the data but in byte form =>  ", opendata)

      fs.readFile(opendata, function(err , data) {
        if(err) {
            console.log("i got error : ", err);
            return err;
        }
        console.log("Opened Data : ", data.toString());
        return data;
      })

      
   

        //  How to Write the data under file ; ==> but in this method overide the data ;

        fs.writeFile('write.txt', "Hello Rajan Kumar Mahto", function (err) {

            if(err) {
                console.log("I got the error : ", err);
                return err;

            }
            console.log("Write data under file Successfully ");

            // but i want to seen the data what are data he writen on file under ;

            fs.readFile('write.txt', function (error, data) {
                if(error) {
                    console.log("I got the error in the writen file", error);
                    return error;
                }
                console.log("I got writhen data : ", data.toString());
                return data;
            })

        // Again open data ==> yaha per apko direct data nhi milta 
        // data ka bytes milta hai 

            fs.open('write.txt', function(Err, bytefrom) {

                // datafrom ==> ek data bytes ke rup me hai ;
                if(Err) {
                    console.log("I got Error Opening :", Err);
                    return Err;
                }
                console.log("Succesfuly opened :");
                console.log(bytefrom) ;

                // Again Read data for Opening data 

                fs.readFile(bytefrom, function(Error, dataFrom) {
                    // yaha per dataform ek data hai      
                    if(Error) {
                        console.log("I got Error of Read on the Opeing file : ", Error);
                    }
                    console.log("Opening fiel Data :", dataFrom);

                    })
                })
            })

          
     // })
        
 
            // jab ham ko data ke under hi data add or include karna ho to 
            // hamlog appendfile name ka use karte hai ;

            // fs.appendFile('write.txt', function()) ==> iske under 4 parameter dena hota hai 
            
            fs.appendFile("write.txt", "I's College Student", "utf8", function(err) {
                if(err) {
                    console.log("I got error : ",err);
                    return err;
                }
                console.log("Append SucessFully");


                // ab us data ko read karne ke liye 

                fs.readFile('write.txt',function(error, data) {
                    if(error) {
                        console.log("I got the error :", error);
                        return error;
                    }
                    console.log("Appended data : ", data.toString());
                    return data;

                })

            })
                */

            // Again the Append the data 

            fs.appendFile('write.txt', " College : Gnanamani College of Technology, Namakkal", "utf8", function(AppErr) {
                if(AppErr) {
                    console.log("I got the Appended AppERR :", AppErr);
                    return AppErr;
                }
                console.log('Sucessfully Appended : ' );

            })

            fs.readFile('write.txt', function(ERR, DATA) {
                if(ERR) {
                    console.log("ERR : ", ERR);
                    return ERR;

                }
                console.log("Appended Readfile: ", DATA.toString());
                return DATA;


            

            })

           