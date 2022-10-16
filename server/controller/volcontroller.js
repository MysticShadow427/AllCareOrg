const Userdb=require('../model/volmodel')
const {sendDonatingEmail,sendVolunteerEmail}=require('../emails/account')



 //create user and save it
 exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'content cannot be empty'})
        return
    }
    //new user

    const user=new Userdb({
    
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
        
    })

    user.save(user).then(()=>{
        res.redirect('/')
        sendVolunteerEmail(user.email,user.name)
        console.log("Mail Sent")
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'some error occured'
        })
    })
 }
