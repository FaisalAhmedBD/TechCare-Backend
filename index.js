const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/techcare-website');
app.use(express.static('public'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('mongoose running successfully')
    var clientSchema = new mongoose.Schema({
        name: String
    });
    clientSchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }
    var client = mongoose.model('client', clientSchema);
    var nwClient = new client({ name: 'Onnorokom Group' });
    nwClient.save(error => {
        if (error)
            console.error(error)
        console.log('new client added');
    })
    console.log('our new client is : ', nwClient.name);
    nwClient.speak();

});
