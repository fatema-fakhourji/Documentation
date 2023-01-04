const express = require("express");
const app = express();
let date_ob = new Date();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
let Mov = movies.join("\n");

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
app.get("/movies/create", (req, res) => {
    res.json({status:200, message:"ok create"})
   });
app.get("/movies/read", (req, res) => {
    res.json({status:200, data:movies})
   });
app.get("/movies/update", (req, res) => {
    res.json({status:200, message:"ok update"})
   });
app.get("/movies/delete", (req, res) => {
    res.json({status:200, message:"ok delete"})
   });
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});