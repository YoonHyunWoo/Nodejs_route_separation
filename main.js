var express = require('express');
var app = express();
var router_1=require('./router/router_1');

app.use('/aboutrouter',router_1);

app.listen(3000,()=>{
    console.log('server is running to localhost:3000');
});