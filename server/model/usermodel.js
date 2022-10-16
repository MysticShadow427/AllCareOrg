const mongoose=require('mongoose')
const validator=require('validator')

var schema= new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:[true,"First name is required"]
    },
    lastname:{
        type:String,
        trim:true,
        required:[true,"Last name is required"]
    },
    email:{
        type:String,
        trim:true,
        required:[true,"Email is required"],
        lowercase:true,
        validate(value) {
            if (!validator.isEmail(value)) {
               throw 'Email is invalid'
            }
        }
    },
    amount:{
        type:Number,
        trim:true,
        required:[true,"Need to enter money"]
    },
    category:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,"Need to enter the Category"]
    }
})

const Userdb=mongoose.model('userdb',schema) //name and variable passed to make new mongoose model

module.exports=Userdb 