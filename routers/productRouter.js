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

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result)=>{            
        res.json(result);
    })
    // agr operation 'findbyid' successfull hua to then chlega or fail hua to catch
    .catch((err)=>{
        res.json(err);
    })
    //res.send('response from user getbyid')
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
    Model.find({model: req.params.model})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});
router.get('/getbymodel/:playback', (req, res) => {
    Model.find({playback: req.params.playback})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});
router.get('/getbyprice/:price', (req, res) => {
    Model.find({price: req.params.price})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});
router.get('/getbycolor/:color', (req, res) => {
    Model.find({color: req.params.color})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});

router.get('/getbyoffer/:offer', (req, res) => {
    Model.find({offer: req.params.offer})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});





//export kr rhe h
module.exports =router;