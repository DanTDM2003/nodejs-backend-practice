require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8888;
const host = process.env.HOST || 'localhost';

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, ('/views')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(404).send("<h1>Hello World</h1>");
})

app.get('/test', (req, res) => {
    res.status(200).render('sample');
})

app.listen(port, host, () => {
    console.log("Server has started");
});