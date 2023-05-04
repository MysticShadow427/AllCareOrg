const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const bodyparser=require('body-parser')
const path=require('path')

const connectDB=require('./server/database/connection')


const app=express()
const publicDirectoryPath=path.join(__dirname,'./assets')

dotenv.config({path:'config.env'})
const port=process.env.PORT || 8080
cont hostname='0.0.0.0'

//log the requests
app.use(morgan('tiny'))

//mongodb connection
connectDB()

//parse to body-parser
app.use(bodyparser.urlencoded({extended:true}))



app.set('view engine','hbs')

//loading assets
// app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
// app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
// app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
app.use(express.static('assets'))

//load routers
app.use('/',require('./server/routes/router'))


app.listen(port,hostname,()=>{
    console.log('Server running on '+port)
})
