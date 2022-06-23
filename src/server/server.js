const express = require('express');
const routes = require('../config/router');
const middleware = require('../config/middleware');

const app = express();
const host = '127.0.0.1';
const port = 3000;

middleware(app);
routes(app);

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
);