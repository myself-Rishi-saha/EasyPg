const express = require('express');
const path=require('path');

//port define
const port=8080;

//path define
const designsPath=path.join(__dirname,'./designs');
const assestsPath=path.join(__dirname,('./assests'));

//path use
const app=express();
app.use(express.static(assestsPath));
app.use(express.static(designsPath));
app.use('/',require('./route'));

//view engine setting
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));


//port listen
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})