const express = require('express');
var path = require('path')
const app = express();
var bodyParser = require("body-parser");
var {router_v1}=require('./Router/index');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
// var { getTeamMemberInfo, addnewTeamMember } = require('./Controller/teamMemberController');
// var { getProductInfo, addNewProduct } = require('./Controller/productController');

app.get('/', (req, res) => {
    res.send('Hello TechCare !!');
})
app.use('/v1',router_v1);

// app.get('/team-members', getTeamMemberInfo);

// app.get('/products', getProductInfo);

// app.post('/add-team-member', addnewTeamMember);
// app.post('/add-new-product', addNewProduct);

app.listen(8000, () => console.log('TechCare is listening on port 8000!'))
