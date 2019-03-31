const express = require('express')
const helmet = require('helmet')
//=======

const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db/mongoose');
const userRoute = require('./routes/user');
const liveUsers = require('./routes/liveUsers');
global.User = require('./models/user');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/', userRoute);
app.use('/', liveUsers);
app.use(cors());


//===========
const app = express()

// add some security-related headers to the response
app.use(helmet())


module.exports = app
