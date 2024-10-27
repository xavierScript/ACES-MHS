const express = require('express')
require('dotenv').config();
const JWT = require('jsonwebtoken')
const router = express.Router()
const User = require('../src/models/User')
const SECRET = process.env.JWT_SECRET

router.get('/',async (req,res) => {
    const {Token} = req.body

    try {
        const SessionUser = JWT.verify(Token, SECRET)
        const _id = CurrentUser.id
        const CurrentUser = await User.findById(_id)
        return res.json({
            status : 'ok',
            Username : CurrentUser.UserName
        })
    }
    catch(err) {
        console.log(err.code)
        return res.json({
            error : err
        })
    }
})

/* router.post('/',(req,res) => {
    const {data} = req.body;
    logic for getting mental health range
    
})
*/

module.exports = router