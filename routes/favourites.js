const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM favourites', (err, results) => {
        if (err) {
            console.error('Error fetching favourites:', err);
            return res.status(500).send('Error fetching favourites');
        }
        res.render('favourites', { favourites: results });
    });
});

module.exports = router;
