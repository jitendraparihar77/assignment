const express = require('express');
const axios = require('axios');
const router = express.Router();
const db = require('../db');

// Handle GET request to load the search page
router.get('/', (req, res) => {
    res.render('search', { universities: [] });
});

// Handle POST request to search for universities
router.post('/', async (req, res) => {
    const query = req.body.query;
    try {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=India&name=${query}`);
        res.render('search', { universities: response.data });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.render('search', { universities: [] });
    }
});

// Handle POST request to add a university to favourites
router.post('/favourite', (req, res) => {
    const { name, state_province, web_page } = req.body;
    db.query('INSERT INTO favourites (name, state_province, web_page) VALUES (?, ?, ?)', [name, state_province, web_page], (err, results) => {
        if (err) {
            console.error('Error saving favourite:', err);
            return res.status(500).send('Error saving favourite');
        }
        res.send('Favourite saved successfully');
    });
});

module.exports = router;
