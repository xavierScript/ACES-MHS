require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')

//important
const PORT = process.env.PORT;
const URI = process.env.ATLAS_URI;
const homepageRoute = require('./routes/homepage')
const SignupRoute = require('./routes/Signup')
const LoginRoute = require('./routes/Login')

//helper functions
const app = express();


//routes
app.use('/api/', homepageRoute)
app.use('/api/Signup', SignupRoute)
app.use('/api/Login', LoginRoute )



