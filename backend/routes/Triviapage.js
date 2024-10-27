const express = require('express')
const router = express.Router()
const User = require('../src/models/User')

router.post('/', async (req, res) => {
    const {data} = req.body
//use user id to access database and record user result

})