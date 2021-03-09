const express = require('express');
const mongojs = require('mongojs');

const app = express();

const databaseUrl = "zoo";
const collection = ['animals'];

const db = mongojs(databaseUrl, collection);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/all', (req, res) => {
    db.animals.find({}, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/sort', (req, res) => {
    db.animals.find().sort({'weight': 1}, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results);
        }
    })
});

app.listen(3000, (req, res) => {
    console.log('Server starting at port 3000...');
})