require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const viewEngine = require('./config/viewEngine.js');
const port = process.env.PORT || 8888;
const host = process.env.HOST || 'localhost';

viewEngine(app);

app.use('/', require('./routes/web.js'));
app.use('/test', require('./routes/web.js'));

app.listen(port, host, () => {
    console.log("Server has started");
});