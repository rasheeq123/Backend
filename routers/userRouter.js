const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
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
router.get('/getbyemail/:email', (req,res)=>{   // "/: url parameter"
    console.log(req.params.email);
    module.find({email: req.params.email})
    .then((result)=>{
        res.json(result);
    }) .catch((err)=>{
        res.json(err);
    });
})

router.get('/getbyid', (req, res) => {
    res.send('response from user getbyid')
});

router.get('/update', (req, res) => {
    res.send('response from user update')
});

router.get('/delete', (req, res) => {
    res.send('response from user delete')
});

module.exports = router;