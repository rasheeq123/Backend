const express = require('express');
const Model = require('../models/productModel');

const router=express.Router(); // router ko initialize krne ka tarika 

router.post('/add', (req, res) => {  // get se link ke form me and post se body ke form me i.e hidden form me
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/getbybrand/:brand', (req,res)=>{   // "/: url parameter"
    console.log(req.params.brand);
    module.findOne({brand: req.params.brand})
    .then((result)=>{
        res.json(result);
    }) 
    .catch((err)=>{
        res.json(err);
    });
    
});

router.get('/getbymodel/:model', (req, res) => {
    Model.find({city: req.params.city})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});
router.get('/getbymodel/:model', (req, res) => {
    Model.find({city: req.params.city})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});





//export kr rhe h
module.exports =router;