const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', (req, res) =>{
    res.render('auth/login');
});

router.get('/signup', (req, res) =>{
    res.render('auth/signup');
});

module.exports = router;    