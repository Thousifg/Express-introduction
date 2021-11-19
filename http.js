const express = require("express");

const app = express();
let data = require("./users.json");

app.get("/", function (request, response) {
    return response.send("Welcome to Home Page");
})

app.get("/users", function (request, response) {
       return response.send(data);
})

app.listen(2345,function(){
    console.log("listening on port 2345");
});