const express = require('express')
const router = express.Router()
const User = require('../models/user')
const dailyData = require ('../models/dailyLogin')
const mongoose = require('mongoose')
const db="mongodb://sampath:sampath123@ds131711.mlab.com:31711/employeeops"
mongoose.set('useFindAndModify', false)
mongoose.connect(db, { useNewUrlParser: true },err =>{

    if(err){
        console.error('Error'+err)
    }else{
        console.log('Connected to mongodb')
    }

})


router.get('/',(req, res)=>{

    res.send('From API route')

})

router.post('/login',(req,res)=>{
    let userData = req.body
   // console.log(userData)
    User.find({employeeID: userData.userID},(error,user)=>{
     //  console.log(user)
        if(error){
            console.log(error)
        }
        else{
            if(user.length<=0){
                res.status(401).send('Invalid UserID')
            }
            else{
                //console.log(user.password)
               // console.log(userData.password)
                if(user[0].password !== userData.password){
                    res.status(401).send('Invalid Passsword')
                }
                else{
                    res.status(200).send(user)
                    }
            }
        }
    })
})

router.post('/dailyLogin',(req,res)=>{
    let loginData=req.body
   
    dailyData.find({date: loginData.date,employeeID:loginData.employeeID},(error,userloginData)=>{

if(error){
console.log(error)
}
else{
if(userloginData.length>0 ){

    if(loginData.outTime){
    dailyData.findOneAndUpdate({date: loginData.date,employeeID:loginData.employeeID},{$set:req.body},{new:false},(error,userUpdatedData)=>{

        if(error){
            console.log(error)
            }
            else{
                console.log(userUpdatedData)
            }

    })
}
}
else{

    
    let dayData=new dailyData(loginData)
    dayData.save((error,updatedData)=>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(updatedData)
        }

    })

}
}
    })
    
   


})

module.exports =  router






