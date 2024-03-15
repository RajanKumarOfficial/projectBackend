const os = require('os');

// console.log(os )


// Operating System About all configuataion 

console.log("Architecutre of Os :" + os.arch());

console.log("OS ka FreeSpace : "+ os.freemem())

console.log("Os ka Toal memory : " + os.totalmem());

console.log("edianness : " + os.endianness())

console.log( "home dir: " + os.homedir());

console.log("host Name : " + os.hostname())


console.log("Type of os : " + os.type());

console.log("Network : " + os.networkInterfaces());

console.log(" platform :" + os.platform());

console.log("Relase Data :" + os.release());

console.log("Temprary Dir : " + os.tmpdir());

console.log("up time : " + os.uptime())
