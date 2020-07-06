//AUTHOR
//NAME : Dharmambal Sureshkumar
//STUDENT ID : B00824492
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

router.get('/dateandtime', function(req, res, next)
{
    console.log("entered")
    
        
        con.getConnection(function(err) {
            console.log("connected");
         if(err){
           console.log(err);
           res.send(500,"SQL Error");
         }
         else{
            con.query("select date,timesolts,doctorname from appointmentplus.newappointmentdoctor", function (err, result, fields) {
               if(err){
                 console.log(err);
               res.send(500,"Query error");
               }else{
               console.log("connected");
               console.log(result);
               return res.status(200).send(result);
               }
               
             });
             }
           });
           
           });
           module.exports = router;