var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const connection = (closure) =>{
    return MongoClient.connect('mongodb://localhost:27017/EmployeeOps',(err,db) =>{
    if(err){
        return console.log(error);
    }

    closure(db); 

    }) 
}

let response={
    status:200,
    message:null,
    data:[]
}
var sendError = (err,res)=>{
response.status=501;
response.message = typeof err == "object"? err.message : err;
response.status(501).json(response);

}

router.get('/employees',(req,res) =>{
connection((db)=>{
  db.collection('employees').find().toArray().then((employees)=>{
response.data=employees;
res.json(response);
  })   
})
})

module.exports = router;