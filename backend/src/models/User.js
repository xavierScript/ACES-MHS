const mongoose = require('mongoose')

const schema =  mongoose.Schema

const journalSchema = new schema({
    
    content : [{
        type : String,
        createdAt : {
            type : Date,
            immutable :true,
            default : () => Date.now()
        },
        UpdatedAt : {
            type : Date,
            default : () => Date.now()
        }
    }]
})

const userSchema = new schema ({
    UserName : {
        type : String,
        required : true, 
        unique : true},
    FirstName : {
        type : String,
        required : true},
    LastName : {
        type : String, 
        required : true},
    Email : {
        type : String, 
        required : true},
    Telephone : {
        type : Number,
        required : true,},
    Password : {
        type : String,
        required : true,},
    CreatedAt: {
        type : Date,
        default : ()=> {
            Date.now()
        }
    },
    Results : [{ type : Number }],
    Journal : journalSchema,
},
    {collection : "Users"}
)

const User = mongoose.model('User',userSchema)

module.exports = User;