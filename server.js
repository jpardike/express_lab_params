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

    const tip = Number('.' + tipPercentage) * total;

    response.send(`${tip}`);
});

app.get('/magic/:question', (request, response) => {
    const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    
    const randomNumber = Math.floor(Math.random() * eightBall.length);

    const answer = eightBall[randomNumber];

    const question = request.params.question;

    response.send(`You asked: ${question}? Magic 8 ball answered: ${answer}.`);
});

app.listen(3000, () => {
    console.log('your server is running on port: 3000');
});