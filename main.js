const express = require('express');
const app = express();
const fs = require('fs');

// POST request and log the body to a file
app.post('/log', (req, res) => {
    const body = req.body;
    fs.appendFile('log.txt', body, (err) => {
        if (err) throw err;
        console.log('The data was appended to file!');
    });
    res.send('Data logged!');
});

// GET request and log the query to a file
app.get('/log', (req, res) => {
    const query = req.query;
    fs.appendFile('log.txt', JSON.stringify(query), (err) => {
        if (err) throw err;
        console.log('The data was appended to file!');
    });
    res.send('Data logged!');
});

// GET request to read the file
app.get('/log', (req, res) => {
    fs.readFile('log.txt', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});