const express = require('express');
const app = express();

const PORT = 4010;

const HOSTNAME = 'localhost';




app.get('/', (req, res) => {

    res.send("Hello World!")

})

app.get('/About', function(req, res) {
    res.send("<h1>About Pages! </h1>")
})

app.get('/contact', function(req,res) {
    res.send("<h1>Contact Page ! </h1>")
})

app.listen(PORT, () => {
    console.log(`server is running on the hostname :${HOSTNAME}, and port : ${PORT}`)
})
