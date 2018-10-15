const mongoose=require('mongoose')
const Schema=mongoose.Schema

const dailyLoginSchema = new Schema({
    date: Date,
    employeeID: String,
    inTime: Date,
    outTime:Date,
    totalWorkingTime: String,
    otherLocation: String

})



module.exports = mongoose.model('dailyLogin',dailyLoginSchema,'dailyLogin')