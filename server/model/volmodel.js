const mongoose=require('mongoose')
const validator=require('validator')

var schema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"First name is required"]
    },
    
    email:{
        type:String,
        trim:true,
        required:[true,"Email is required"],
        validate(value) {
            if (!validator.isEmail(value)) {
               throw 'Email is invalid'
            }
        }
    },

    password:{
        type:String,
        trim:true,
        required:[true,"password is required"]
    }
})

const Voldb=mongoose.model('voldb',schema) //name and variable passed to make new mongoose model

module.exports=Voldb 