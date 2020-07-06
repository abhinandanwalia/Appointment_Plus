var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();
var query="";
router.post('/', function(req, res, next) {
    console.log(req.body.patientid);
    con.getConnection(function(err) {
        console.log("connected");
     if(err){
       res.send(500,"SQL Error");
     }
     else{
       
    con.query("insert into appointmentplus.records (patientid,patientname,description,record) values('"+req.body.patientid+"','"+ req.body.patientname+"','"+req.body.patientdescription +"','"+ req.body.record+"')", function (err, result, fields) {
       if(err){
       res.send(500,"Query error");
       console.log(err);
       }else{
       console.log("connected1");
       //console.log(result);
       return res.status(200).send({message:"success"});
       }
       
     });
     }
   });
    
});
router.get('/getrecords', function(req, res, next) {
    con.getConnection(function(err) {
        console.log("connected");
     if(err){
       res.send(500,"SQL Error");
     }
     else{
        query = "select * from appointmentplus.records";
    con.query(query, function (err, result, fields) {
       if(err){
       res.send(500,"Query error");
       console.log(err);
       }else{
       console.log("connected1");
       //console.log(result);
       return res.status(200).send({message:result});
       }
       
     });
     }
   });
});
module.exports = router;