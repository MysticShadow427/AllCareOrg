const Userdb=require('../model/usermodel')
const {sendDonatingEmail,sendVolunteerEmail}=require('../emails/account')

 //create user and save it
 exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'content cannot be empty'})
        return
    }
    //new user

    const user=new Userdb({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        amount:req.body.amount,
        category:req.body.category
    })

    user.save(user).then(()=>{
        res.redirect('/')
        sendDonatingEmail(user.email,user.firstname,user.lastname)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'some error occured'
        })
    })
 }
