//allow diff files with routers 
const usercount=require('../model/usermodel')
const volcount=require('../model/volmodel')
// const mongoose=require('mongoose')


// let vc;
// const volunCount=volcount.countDocuments((err,count)=>{
//     if(err){
//         res.status(500).json({
//             error:err
//         })
//         console.log(err)
//     }
//    vc = count;
// })

// let uc;
// const userCount=usercount.countDocuments((err,count)=>{
//     if(err){
//         res.status(500).json({
//             error:err
//         })
//         console.log(err)
//     }
//    uc = count;
// })



// let catAmount=0
// const catAm=usercount.aggregate(
//     [
//       {
//         $group: {
//           _id: "$category",
//           total: {
//             $sum: "$amount"
//           }
//         }
//       }
//     ],(err,result)=>{
//     if(err){
//         res.status(500).json({
//             error:err
//         })
//         console.log(err)
//     }
//     result.forEach((user)=>{
//         catAmount+=user.total
//     })
// })

// let catAmount = 0;

// const catAm = usercount.aggregate([
//   {
//     $group: {
//       _id: "$category",
//       total: {
//         $sum: "$amount"
//       }
//     }
//   }
// ]);

// catAm.exec((err, result) => {
//   if (err) {
//     // handle error
//     console.log(err);
//     return res.status(500).json({
//       error: err
//     });
//   }

//   result.forEach((user) => {
//     catAmount += user.total;
//   });
// });


 
let temp=6984933
let inituser=23374
let initvol=384734

let vc;
let uc;
let catAmount;

exports.homeRoutes=async (req,res)=>{
    try{
        
        vc = await volcount.countDocuments();
        
        uc= await usercount.countDocuments();
        
        catAmount=0;
        let result=await usercount.aggregate(
            [
                {
                    $group: {
                        _id: "$category",
                        total: {
                            $sum: "$amount"
                        }
                    }
                }
            ]);
        result.forEach((user)=>{
            catAmount+=user.total
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({error: err});
    }
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