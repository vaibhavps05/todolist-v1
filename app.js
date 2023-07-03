const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.get("/", function(req, res){

    var today = new Date();

    if (today.getDay() === 1 ) {
        res.send("its a holiday");
    }
    else{
        res.send("its not the weeknd");
    }



});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});