const http  = require('http')

// http ke help se create the server 

 const server = http.createServer(function(req,res) {
    if(req.url =='/') {
     
        res.write("Hello Sever first ");

    }else if(req.url== "/about") {

        res.write("Hello This is About Pages ");
    }

    res.end()
})
// ab isko port number do jise ki uh browser per run ho pai 

server.listen(5001);
