
const express = require('express');
const {
  PORT,
  CONTEXT_PATH,
  setupServer,
  addDefaultErrorHandling,
  addProxy
} = require('./setupServer');

const app = express();

setupServer(app);
addProxy(app);
addDefaultErrorHandling(app);

app.listen(PORT, undefined, () => {
  console.log(`Server started on http://localhost:${PORT}${CONTEXT_PATH}`);
});

