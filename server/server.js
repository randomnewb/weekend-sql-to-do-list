const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded({extended:true}));

// Add 'task' router here
const tasksRouter = require('./routes/tasks.router.js')
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})