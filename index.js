const express = require('express');
var path = require('path')
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
var { getClientInfo, addNewClient } = require('./Controller/clientController');
var { getTeamMemberInfo, addnewTeamMember } = require('./Controller/teamMemberController');

app.get('/', (req, res) => {
    res.send('Hello TechCare !!');
})

app.get('/clients', getClientInfo);
app.get('/team-members', getTeamMemberInfo);
app.post('/add-client', addNewClient);
app.post('/add-team-member', addnewTeamMember);

app.listen(8000, () => console.log('TechCare is listening on port 8000!'))
