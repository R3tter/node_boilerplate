const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./constants');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'I am using babel in NodeJS',
    status: 'success'
  });
});

app.listen(process.env.PORT || port, () => {
  // eslint-disable-next-line
  console.log('server up and running');
});
