const express  = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("hello mohan");
});
app.get("/about", (req, res)=>{
    res.send("<h2>hello subham</h2>");
});
app.post("/login", (req, res)=>{
    res.send("login success");
});
app.delete("/delete", (req, res)=>{
    res.send("delete success");
});
app.get("/about-us", (req, res)=>{
    // res.status(200).json ({
    // user: "shyam", 
    // balance: "2000",
    // id: "123ghts6"
    // });
    res.status(500).json ({
        erorr: "somthing went wrong"
    
    });
});



app.listen(3000, () => console.log("server is running at port 3000...."));