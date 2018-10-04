const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require("body-parser");
var compression = require('compression');
app.use(compression());
var {router}=require('./Router/index');
require('./configDatabase/index');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello TechCare !!');
})
app.use('/v1',router);

app.listen(8002, () => console.log('TechCare is listening on port 8000!'));
