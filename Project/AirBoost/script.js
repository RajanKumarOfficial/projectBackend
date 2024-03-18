const express = require("express");

const app = express();

const PORT = 4001;


app.get('/', (req, res) => {
    res.send("<h1>This is Shoos Website Pages</h1>")
})
// template engine ko set karne ke liye 

app.set("view engine", "ejs");

app.use(express.static('./public'))


app.get('/home', (req, res) => {
    res.render("index")
})


app.get('/signup', (req, res) => {

    res.render('signup');

})

app.get('/error', (req, res) => {

    res.render('error');

})





function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }



app.listen(PORT, () => {
    console.log(`server is runing on the port ${PORT}`);

})