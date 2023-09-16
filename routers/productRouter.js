const express = require('express');

const router=express.Router(); // router ko initialize krne ka tarika 

router.get('/add', (req, res)=>{    // get se link ke form me and post se body ke form me i.e hidden form me
    res.send('response from product ')
});

//export kr rhe h
module.exports =router;