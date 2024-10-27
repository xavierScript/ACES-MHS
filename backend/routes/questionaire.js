const express = require('express')
const router = express.Router()
const User = require('../src/models/User')
require('dotenv').config()
const JWT = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET 
//const MentalAssessment = require('../src/controllers/helpers')



/* router.post('/', async (req,res) => {
    //get data of result from questionaire
    const{data,Token} = req.body;

    const SessionUser = JWT.verify(Token, SECRET)
    const _id = SessionUser._id
    const CurrentUser = await User.findById(_id)
    CurrentUser.//update?({
        Result
    })




})*/