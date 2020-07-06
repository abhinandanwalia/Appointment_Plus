//AUTHOR
//NAME : AISHWARYA NARAYANAN
//STUDENT ID : B00820313
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();


/* Editing upcoming appointment*/
router.post('/editappointment', function(req, res, next)
{
    console.log(req.body);
    
        var book_appointmentID = req.body.idbook_appointment;

        var status=req.body.Status;
      
        con.getConnection(function(err) {
            console.log("connected");
         if(err){
           console.log(err);
           res.send(500,"SQL Error");
         }
         else{
             
            con.query("UPDATE appointmentplus.book_appointment SET status='"+status+"' WHERE idbook_appointment="+book_appointmentID+"", function (err, result, fields) {
               if(err){
                 console.log(err);
               res.send(500,"Query error");
               }else{
               console.log("connected");
               console.log(result);
               return res.status(200).send({message:"success"});
               }
               
             });
             }
           });
           
           });
           module.exports = router;
