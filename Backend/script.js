const express = require("express");

const app = express();


app.use(function(req,res, next) {
    next()
})


app.get("/", function(req, res) {

    res.send("College Application Function");
})

app.set("view engine", "ejs");

app.use(express.static('./public'))

app.get("/home", function(req, res) {

    res.render("index");
})



app.get("/about", function(req,res) {
    res.render("contact");
})



app.get("/error", function(req, res) {

    res.render('error')

    throw Error("something went wronge")
})


function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error : err })
  }




app.listen(3001);
