const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`Hey, 'dare world!`);
});

app.get('/about', (req, res) => {
    res.send(`I like long walks on the beach.`);
});

app.listen(4000, () => console.log('listening on 4000'));