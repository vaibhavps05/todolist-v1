const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let newItems = ["hi", "hello", "hola"];

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        newListItems: newItems
    });

});


app.post("/", function(req, res){
    let newItem = req.body.task;

    newItems.push(newItem);

    res.redirect("/");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});