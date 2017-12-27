var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://booksAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookrouter = express.Router();

bookrouter.route('/Books')
    .get(function(req,res){
        Book.find(function(err,books){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(books);
            }
        });
    });

app.use('/api',bookrouter);

app.get('/',function(req,res){
    res.send("Welcome to Sourav's API site ..!!");
});

app.listen(port,function(){
    console.log("Running on port :"+ port);
});