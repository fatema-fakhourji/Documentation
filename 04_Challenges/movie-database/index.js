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
function date( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }
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
function title( e, f ) {
    if ( e.title < f.title ){
      return -1;
    }
    if ( e.title > f.title ){
      return 1;
    }
    return 0;
  }
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
    let bydate = movies.sort(date);
    res.json({status:200, data:bydate})
   });
app.get("/movies/read/by-rating", (req, res) => {
    let byrating = movies.sort(rating);
    res.json({status:200, data:byrating})
   });
app.get("/movies/read/by-title", (req, res) => {
    let bytitle = movies.sort(title);
    res.json({status:200, data:bytitle})
   });
app.get("/movies/read/id/:uId", (req, res) => {
    for (let i = 0; i < movies.length; i++){
    if (req.params.uId === movies[i].title){
    res.json({status:200, data:movies[i]})
    }
    }
    for (let i = 0; i < movies.length; i++){
        if (req.params.uId !== movies[i].title){
            res.json({status:404, error:true, message:'the movie' + " " + req.params.uId + " " + 'does not exist'})
        }
    }
   });
app.get("/movies/add?title=:utitle&year=:uyear&rating=:urating", (req, res) => {
    let y = req.params.uyear;
    let x = req.params.utitle;
    const str2 = x.charAt(0).toUpperCase() + x.slice(1);
    let z = {title: str2, year: req.params.uyear, rating: req.params.urating};
    if (y.length !== 4){
    res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    } else if (isNaN(y) == true){
    res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    } else {
    movies.push(z);
    res.json({status:200, data:movies})
    }
   });
app.get("/movies/add?title=&year=:uyear&rating=:urating", (req, res) => {
    res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
   });
app.get("/movies/add?title=:utitle&year=&rating=:urating", (req, res) => {
    res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
   });
app.get("/movies/add?title=:utitle&year=:uyear&rating=", (req, res) => {
    let y = req.params.uyear;
    let z = {title: req.params.utitle, year: req.params.uyear, rating: "4"};
    if (y.length !== 4){
    res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    } else if (isNaN(y) == true){
    res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    } else {
    movies.push(z);
    res.json({status:200, data:movies})
    }
   });
app.get("/movies/delete/:uuId", (req, res) => {
    for (let i = 0; i < movies.length; i++){
    if (req.params.uuId === movies[i].title){
        movies.splice([i], 1);
        res.json({status:200, data:movies})
    }
    }
    for (let i = 0; i < movies.length; i++){
        if (req.params.uuId !== movies[i].title){
            res.json({status:404, error:true, message:'the movie' + " " + req.params.uuId + " " + 'does not exist'})
        }
    }
   });
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});