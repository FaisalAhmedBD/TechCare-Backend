var clientMiddleWare = require('./Middleware/client');
const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/', clientMiddleWare.clientMiddleWare);
//app.post('/add-client', clientMiddleWare.addClient);
app.listen(8000, () => console.log('TechCare is listening on port 8000!'))
