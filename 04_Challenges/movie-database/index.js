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

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});