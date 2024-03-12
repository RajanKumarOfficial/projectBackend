const express = require("express");

const app = express();


app.use(function(req,res, next) {
    next()
})


app.get("/", function(req, res) {

    res.send("College Application Function");
})

app.set("view engine", "ejs");

app.get("/home", function(req, res) {

    res.render("index");
})




app.listen(3001);
