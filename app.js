const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors('*'));

app.get('/', (req, res) => {
  res.json({"message": "API is Okay"});
})

require('./app/routes/generalRoutes.js')(app);
require('./app/routes/noteRoutes.js')(app);

module.exports = app;