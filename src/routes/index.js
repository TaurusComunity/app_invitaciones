const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', (req, res) => {
    res.render('content/friendly');
});

router.post('/addFamily', async(req, res) => {
    const { nombre_familia, participantes } = req.body;
    const newFamilia = {
        nombre_familia,
        participantes
    };
    pool.query('INSERT INTO usuarios set ?', [newFamilia]);
    req.flash('success', 'Registro realizado correctamente.');
    res.redirect('/');
});

module.exports = router;
