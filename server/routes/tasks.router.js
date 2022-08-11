const express = require('express');
const { Query } = require('pg');
const router = express.Router();

const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "tasks" ORDER BY "name";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    })
});

module.exports = router;