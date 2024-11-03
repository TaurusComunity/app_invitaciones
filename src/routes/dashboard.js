const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/index', async(req, res) =>{
    const invitados = await pool.query('SELECT * FROM usuarios');
    req.flash('success', 'Mostrando invitados...');
    res.render('dashboard/index', {invitados});
    
});


module.exports = router;    