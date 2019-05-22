const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');

    // Firefox does not seem to accept * for the content-type header but that needs to be explicitly sent back
    // res.header('Access-Control-Allow-Headers', 'Content-Type, *');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/', (req, res) => res.send(JSON.stringify({ value: 'Hello World. You sent a GET Request' })));
app.post('/', (req, res) => res.send(JSON.stringify({ value: 'Hello World. You sent a POST Request' })));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
