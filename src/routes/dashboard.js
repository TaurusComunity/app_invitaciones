const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/index', (req, res) =>{
    res.send('dashboard admin');
});

module.exports = router;    