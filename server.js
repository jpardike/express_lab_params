const express = require('express');
const app = express();

app.get('/greeting', (request, response) => {
    response.send('Hello, stranger');
});

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello, ${request.params.name}`);
});

app.listen(3000, () => {
    console.log('your server is running on port: 3000');
});