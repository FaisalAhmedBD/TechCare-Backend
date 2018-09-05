var express=require('express');
var app=express();
var Models=require('../Model/models');

var clientList;
Models.client.find({}, (err, data) => {
    if (err)
        console.log('error')
    else {
        clientList = data;
        console.log(data)
    }
});

let clientMiddleWare=(req, res) => {
    res.send({
        'clients': clientList,
        'number_of_clients': clientList.length,
    })
}
module.exports.clientMiddleWare=clientMiddleWare;