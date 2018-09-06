const express = require('express');
var path = require('path')
const app = express();
var bodyParser = require("body-parser");
var {router_v1}=require('./Router/index');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello TechCare !!');
})
app.use('/v1',router_v1);

app.listen(8000, () => console.log('TechCare is listening on port 8000!'))
