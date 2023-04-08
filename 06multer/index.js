const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
   res.send(" Multer is goin fine .....");
});

app.listen(port, () => console.log(`server is running at ${port}...`));