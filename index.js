var { clientMiddleWare, addClient } = require('./Controller/clientController');
const express = require('express');
const app = express();
app.use(express.static('public'));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', clientMiddleWare);
app.post('/add-client', (req, res) => {
    addClient.save(error => {
        if (error)
            console.error(error)
        console.log('new client added');
    })
    res.send('client added')
});
app.listen(8000, () => console.log('TechCare is listening on port 8000!'))
