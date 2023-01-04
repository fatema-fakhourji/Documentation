const express = require("express");
const app = express();
let date_ob = new Date();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();


app.get("/", (request, response) => {
    response.send("Ok");
});
app.get("/test", (req, res) => {
    res.json({status:200, message:"Ok"});
   });
app.get("/time", (req, res) => {
    res.json({status:200, message:hours + ":" + minutes + ":" + seconds});
   });
app.get("/hello/", (req, res) => {
    res.json({status:200, message:"Hello"})
   });
app.get("/hello/:userId", (req, res) => {
    res.json({status:200, message:"Hello,"+req.params.userId})
   });
app.get("/search?s=", (req, res) => {
    res.json({status:500, error:true, message:"you have to provide a search"})
   });
app.get("/search?s=:SEARCH", (req, res) => {
    res.json({status:200, message:"ok", data:req.params.SEARCH})
   });
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});