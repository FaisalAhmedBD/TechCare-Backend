const express =require('express');
const app=express();
app.get('/',(req,res)=>res.send('Hello TechCare !'));
app.listen(3000,()=>console.log('techcare is listening to 3000!'));
app.use(express.static('public'));