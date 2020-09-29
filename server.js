const { request, response } = require('express');
const express = require('express');
const app = express();

app.get('/greeting', (request, response) => {
    response.send('Hello, stranger');
});

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello, ${request.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (request, response) => {
    const total = request.params.total;
    const tipPercentage = request.params.tipPercentage;
    const num = Number('.' + tipPercentage);

    const tip = Number('.' + tipPercentage) * total;

    response.send(`${tip}`);
});

app.listen(3000, () => {
    console.log('your server is running on port: 3000');
});