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
const movies1 = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
const movies2 = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
const movies3 = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
function date( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }
let bydate = movies1.sort(date);
function rating( c, d ) {
    if ( c.rating < d.rating ){
      return 1;
    }
    if ( c.rating > d.rating ){
      return -1;
    }
    if (c.rating === d.rating){
        if ( c.title < d.title ){
            return -1;
          }
          if ( c.title > d.title ){
            return 1;
          }
          return 0;
    }
    return 0;
  }
let byrating = movies2.sort(rating);
function title( e, f ) {
    if ( e.title < f.title ){
      return -1;
    }
    if ( e.title > f.title ){
      return 1;
    }
    return 0;
  }
let bytitle = movies3.sort(title);
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
app.get("/movies/read/by-date", (req, res) => {
    res.json({status:200, data:bydate})
   });
app.get("/movies/read/by-rating", (req, res) => {
    res.json({status:200, data:byrating})
   });
app.get("/movies/read/by-title", (req, res) => {
    res.json({status:200, data:bytitle})
   });
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});