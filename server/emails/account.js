//const sgMail = require('@sendgrid/mail')
const nodemailer=require('nodemailer')
//const img=require('../../assets/img/vol')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'allcare.org.hackout@gmail.com',
        pass:'lvuddgqvktaijues'
    }
})



const sendDonatingEmail = async (email, fname,lname) => {
    const mailOptions={
        from:'allcare.org.hackout@gmail.com',
        to:email,
        subject:'Thanks for donating',
        text:`Hello ${fname} ${lname}!.Thank You for donating`
    }
    return transporter.sendMail(mailOptions)
    
}
// can send html files too,will try later 

const sendVolunteerEmail =async (email, name) => {
    const mailOptions={
        
        from:'allcare.org.hackout@gmail.com',
        to:email,
        subject:'You are a volunteer now!',
        text:`Hello ${name}!.Thank You for choosing to be a volunteer`,
        
    }
    
    return transporter.sendMail(mailOptions)
    
}


async function handler(req,res){
    if(req.method!='POST'){
        return res.status(500).json({
            error:'unable to send email'
        })
    }
    const body=JSON.parse(req.body)

    let done=await sendVolunteerEmail(body.email,body.name)
    if(done.rejected.length>0){
        return res.status(500).json({
            error:'unable to send email'
        })
    }
    

    let done1=await sendDonatingEmail(body.email,body.name)
    if(done1.rejected.length>0){
        return res.status(500).json({
            error:'unable to send email'
        })
    }
    else{
        return res.status(200).json({
            message:'ok'
        })
    }
}




module.exports = {
    sendVolunteerEmail,
    sendDonatingEmail
}