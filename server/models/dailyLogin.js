const mongoose=require('mongoose')
const Schema=mongoose.Schema

const dailyLoginSchema = new Schema({
    date: String,
    employeeID: String,
    inTime: String,
    outTime:String,
    totalWorkingTime: String,
    otherLocation: String

})



module.exports = mongoose.model('dailyLogin',dailyLoginSchema,'dailyLogin')