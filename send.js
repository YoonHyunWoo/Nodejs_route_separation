var express = require('express');
var router = require('./router/router');
var app = express();

app.use('/class',router);

app.listen(3000,()=>{
    console.log('server running to localhost:3000');
})
