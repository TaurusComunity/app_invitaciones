const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/friendly', (req, res) =>{
    res.render('content/friendly');
});

router.get('/addFamily', (req, res) =>{
    res.send('form register family');
});


module.exports = router;    