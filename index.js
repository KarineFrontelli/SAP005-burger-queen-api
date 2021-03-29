/* eslint-disable no-console */
const cors = require('cors');
const express = require('express');
const routes = require('./server/routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT);

// const port = 3000;

app.use(cors());
// app.use('/', routes);
// app.listen(port, () => {
console.log(`Example app listening at http://localhost:${PORT}`);
// });
