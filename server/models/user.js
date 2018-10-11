const mongoose = require('mongoose')

const Schema =  mongoose.Schema
const userSchema = new Schema({
    name: String,
    password: String,
    employeeID: String
})



module.exports = mongoose.model('user',userSchema,'employees')