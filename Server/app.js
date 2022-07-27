var express = require('express');
var bodyParser = require('body-parser');
const app = express();
var mongoclient = require("mongodb").MongoClient;
var url = "mongodb+srv://hexafold:czZ7r2WUsoAcNZ3y@cluster0.jcb819v.mongodb.net/?retryWrites=true&w=majority";

app.get("/",  (req, res) => {
    mongoclient.connect(url, function(err, db) {
        if (err) throw err;
    
        var dbo = db.db("hexafold");
        dbo.collection("user").find({email:'prathamjajodia1@gmail.com'}).toArray( (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }) 
});

server = app.listen(8080);