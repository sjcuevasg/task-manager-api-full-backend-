const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/users', require('./routes/user.routes'));
app.use('/api/tasks', require('./routes/task.routes'));

module.exports = app;