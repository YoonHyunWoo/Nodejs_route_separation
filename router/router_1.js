var express = require('express');
var router = express.Router();
var fs = require('fs');
router.use((req,res,next)=>{
    next();
});


router.get('/:who',(req,res)=>{
    let {who} = req.params;
    if(who == 'about'){
        res.send('hi2');
    }else if(who == 'hello'){
        res.send('hello');
    }else{
        fs.readFile('router/index.html', 'utf8',(err,data)=>{
            res.json(data);
        })
    }
})
router.get('/',(req,res)=>{
    res.send('hi1');
});

router.get('/about',(req,res)=>{
    res.send('hi2');
});

module.exports = router;
