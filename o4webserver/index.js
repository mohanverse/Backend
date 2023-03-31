const express  = require("express");
const app = express();

var myconsolelog = function(req, res, next){
    console.log("i am a Middleware");
    next();
};

var servertime = function(req, res,  next){
    req.requestTime = Date.now()
    next();
};

app.use(servertime)

app.get("/", (req, res)=>{
    res.send("hello mohan" + " and time is :" + req.requestTime);
    console.log("hello world from /");
});

app.listen(3000, () => console.log("server is running at port 3000...."));