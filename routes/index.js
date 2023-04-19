//Imports express package
const express = require('express');

// Imports modular routers for /notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
