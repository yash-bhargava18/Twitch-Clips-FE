const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(__dirname + '/src'));
app.get("/", (req, res)=>{
res.sendFile(path.join(__dirname, "..", "code","src", "index.html"));
});



app.post("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "..", "code","src", "selection.html"))
})



app.listen(5000, (req, res)=>{
console.log("Server has started ! ");
})