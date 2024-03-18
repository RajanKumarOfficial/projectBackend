const express = require('express');

const app = express();

const PORT = 4000;



app.get("/", (req,res) => {

    res.send("<h1>Hello </h1>");
})

app.set("view engine", "ejs");

app.use(express.static('./public'))

app.get('/home', (req,res) => {
    res.render("index");
})


app.listen(PORT, () => {

    console.log(`server is runing port ${PORT}`);
})