const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  //  console.log('mongoose running successfully')
  var kittySchema = new mongoose.Schema({
    name: String
  });
});

var database;
MongoClient.connect('mongodb://localhost:27017/userInformation', (err, client) => {
    if (err) return console.log(err)
    database = client.db('userInformation') // whatever your database name is
    app.listen(8000, () => {
        console.log('TechCare listening to  8000')
    })
})
app.get('/', (req, res) => {
    database.collection('UserInformation').find().toArray((err, result) => {
        if (err)
            console.log('error : ', err);
        else {
            //console.log('result : ', result);
            res.send('Hello TechCare !');
        }

    })
}
);

app.use(express.static('public'));