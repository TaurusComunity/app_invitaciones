const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/index', async (req, res) => {
    try {
        const invitados = await pool.query('SELECT * FROM usuarios');

        // Contamos las familias y sumamos los invitados
        const [totales] = await pool.query(`
            SELECT COUNT(*) AS totalFamilias, SUM(participantes) AS totalInvitados 
            FROM usuarios
        `);

        req.flash('success', 'Mostrando invitados...');
        res.render('dashboard/index', {
            invitados,
            totalFamilias: totales.totalFamilias,
            totalInvitados: totales.totalInvitados
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        req.flash('error', 'No se pudo obtener los datos.');
        res.redirect('/error');
    }
});

module.exports = router;
