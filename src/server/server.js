const express = require('express');
const routes = require('../config/router');
const middleware = require('../config/middleware');

const app = express();
const host = '127.0.0.1';
const port = 3000;

middleware(app);
routes(app);

const server = app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
);

const gracefullShutdown = () => {
  console.log('🤞 Shutting down application');

  server.close(() => {
    console.log('👋 All requests stopped, shutting down');
    // once the server is not accepting connections, exit
    process.exit();
  });
}

process.on('SIGINT', gracefullShutdown);
process.on('SIGTERM', gracefullShutdown);
