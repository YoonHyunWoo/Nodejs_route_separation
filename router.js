var express = require('express');
var fs = require('fs'); 
var router = express.Router();
//라우팅을 나누어 줄 떄 사용한다.

// 1, 2에따라 응답하는 코드
router.get('/:about',(req,res)=>{
    let {about} = req.params;
    if(about == '1'){
        const data = [
            {
                name : 'yoonhyenwoo',
                birth: '2005/10/13'
            },
            {
                name:'kimgaeddong',
                birth:'2005/12/10',
            },
        ];
        res.send(data);
    }else if(about == '2'){
        const data = [
            {
                name : 'parkminsu',
                birth: '2005/6/15'
            },
            {
                name:'kimsangso',
                birth:'2005/9/21',
            },
        ];
        res.send(data);
    }else{
        //존재하지 않는 페이지랍니당
        res.send("404 Page Not Found");
    }
})


// 파일 모듈화
module.exports = router;