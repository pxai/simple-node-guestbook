var express = require('express');
var mongoose = require('mongoose');
var mongooseTypes = require("mongoose-types");

mongooseTypes.loadTypes(mongoose);

mongoose.connect('mongodb://localhost/blog');
var app = express();
var Email = mongoose.SchemaTypes.Email;

var postSchema = {
    title: String,
    content: String,
    author: Email,
    date: { type: Date, default: Date.now },
    tags: [String]
};

var guestbookSchema = {
    name: String,
    date: { type: Date, default: Date.now },
    msg: String
};

var GuestBook = mongoose.model('GuestBook',guestbookSchema, 'guestbook');

app.use(express.static(__dirname + '/public'));

app.get('/guestbook', function (req, res) {
    GuestBook.find(function (err, data) {
       if (err) { res.send('{"msg":"No data"}'); return;}
       res.send(data);
    });
});

app.get('/guestbook/who/:who', function (req, res) {
    GuestBook.find({name:req.params.who},function (err, data) {
        if (err) { res.send('{"msg":"No data"}'); return;}
        res.send(data);
    });
});

app.get('/', function (req, res) {
    res.send("hello world");
});

app.listen(3000);

module.exports = app;
