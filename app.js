'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const api = require('./routes/routesPost')
const app = express()


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//endpoints
app.use('/api',api)

module.exports = app