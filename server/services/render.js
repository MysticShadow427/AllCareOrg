//allow diff files with routers 
const usercount=require('../model/usermodel')
const volcount=require('../model/volmodel')

// const getCount= async()=>{
//     try{
//         const result=await usercount.count()
//         return result
//     } catch(err){
//         console.log(err)
//     }
// }
let vc;
const volunCount=volcount.countDocuments((err,count)=>{
    if(err){
        res.status(500).json({
            error:err
        })
    }
   vc = count;
})

let uc;
const userCount=usercount.countDocuments((err,count)=>{
    if(err){
        res.status(500).json({
            error:err
        })
    }
   uc = count;
})



let catAmount=0
const catAm=usercount.aggregate(
    [
      {
        $group: {
          _id: "$category",
          total: {
            $sum: "$amount"
          }
        }
      }
    ],(err,result)=>{
    if(err){
        res.status(500).json({
            error:err
        })
    }
    result.forEach((user)=>{
        catAmount+=user.total
    })
})
 
let temp=6984933
let inituser=23374
let initvol=384734


exports.homeRoutes=(req,res)=>{
    res.render('index',{
        userCount:uc+inituser,
        totDonation:catAmount+temp,
        voluncount:vc+initvol
    })
}

exports.donateRoutes=(req,res)=>{
    res.render('donate')
}

exports.volRoutes=(req,res)=>{
    res.render('volunteer')
    
}