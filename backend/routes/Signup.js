const express = require('express')
const router = express.Router()
const bcrypt = require ('bcrypt')
const User = require('../src/models/User')

router.post('/', async (req,res) => {
    const{
        UserName, password:plainTextPassword,
        Email, Telephone, F_name, L_name
    } = req.body;

//password validation
    if(typeof plainTextPassword !== 'string') {
        return res.json({
            status : 'error',
            errormessage : 'invalid password',
            errortype : 'password'
        })
    }

    if(plainTextPassword.length < 6 || plainTextPassword.length == null) {
        return res.json({
            status : error,
            errormessage : 'length must be 6 or more',
            errortype : 'password'
        })
    }
    //password validation end

    //password hashing
    const password = await bcrypt.hash(plainTextPassword,12)
    //password hashing end

    //username validation
    if(!UserName || typeof UserName !== 'string' || UserName === null) {
        return res.json({
            status : 'error',
            errormessage : 'Invalid username',
            errortype : 'username'
        })
    }
    //username validation end
    
    //create user account
    try{
        const NewUser = await User.create({
            FirstName: F_name,
            LastName: L_name,
            Email: Email,
            Telephone: Telephone,
            Password: password,
            UserName: UserName,
    })
        console.log("Signup successful", NewUser)
    } catch(err) {
        if (err.code === 11000) {
            return res.json({
                error: 'Username is already in use'
            });
        }
        throw err;
    }
        res.json({
            status: 'ok'
        })  
}) 
module.exports = router