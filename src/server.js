const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8009;

app.use(cors());
app.use(bodyParser.json());

// Import routes
require('./routes')(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});