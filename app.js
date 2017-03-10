const express  = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// register middleware to log within the app.
app.use(logger('dev'));

// register middleware to parse body response with json.
app.use(bodyParser.json());
// Don't url encode data you're sending back to the server.
app.use(bodyParser.urlencoded({ extended: false }));

// Catch all route. On success send message to client.
app.get('*', (req, res) => res.status(200).send({
    message: "Hello World, from Express"
}))


module.exports = app;