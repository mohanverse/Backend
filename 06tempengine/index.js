const express = require('express');
const path = require("path")


let app = express();

var port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 

app.get("/", (req, res) =>{
    res.render("index.pug")

});

app.listen(port, ()=> console.log('server is running .....'));