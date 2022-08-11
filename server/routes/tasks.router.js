const { Router } = require('express');
const express = require('express');
const { Query } = require('pg');
const router = express.Router();

const pool = require('../modules/pool.js');

router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM "tasks" WHERE "id" = $1'
    pool.query(queryText, [req.params.id])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    const task = req.body;
    const queryText = `
        INSERT INTO "tasks" ("name", "complete")
        VALUES ($1, $2);
        `
    pool.query(queryText, [task.name, task.complete]
        ).then((results) => {
            console.log(results);
            res.send(results);
        }).catch((error) => {
            console.log('ERROR in POST /tasks', error);
            res.sendStatus(500)
        })
})

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "tasks" ORDER BY "name";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    })
});

router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const task = req.body
    console.log(req.body);
    const queryText = `
    UPDATE "tasks" SET "complete" = $1
    WHERE "id" = $2;
    `;
    pool.query(queryText, [task.complete, taskId])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

module.exports = router;