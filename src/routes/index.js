const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', (req, res) =>{
    res.send('login');
});

router.get('/signup', (req, res) =>{
    res.send('signup');
});

module.exports = router;    