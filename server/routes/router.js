const express=require('express')
const route=express.Router()

const services=require('../services/render')
const usercontroller=require('../controller/usercontroller')
const volcontroller=require('../controller/volcontroller')

//for / route get method
route.get('/',services.homeRoutes)

//for /donate route get method
route.get('/donate',services.donateRoutes)

//for /volunteer route get method 
route.get('/volunteer',services.volRoutes)

//for creating a new user in db
route.post('/donate-now',usercontroller.create)

//for creating a new volunteer
route.post('/volunteer-now',volcontroller.create)

module.exports=route