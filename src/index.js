import express from 'express';
import bodyParser from 'body-parser';

import { port } from 'constants';

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
