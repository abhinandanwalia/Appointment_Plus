//AUTHOR
//NAME : Varsha Sridhar
//STUDENT ID : B00791643

var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

/* Cancelling doctor's appointment-Varsha */
router.post('/canceldocAppointment', function(req, res, next) 
{
    
    var DoctorName = req.body.DoctorName;
    var Booking_Date = req.body.Booking_Date;
    var Booking_Time = req.body.Booking_Time;
    var Status = "Cancelled"
 
 con.getConnection (function(err) 
    { 
     console.log("connected");
         if(err)
          {
                res.send(500,"SQL Error");
          }
        else
         {
           con.query("UPDATE appointmentplus.book_appointment SET Status = ? WHERE DoctorName= ? AND Booking_Date = ? AND Booking_Time = ?",[Status,DoctorName,Booking_Date,Booking_Time], function (err,result,fields) 
            {

             if(err)
              {
                res.send(500,"Query error");
              }
             else
              {

                con.query("SELECT * FROM appointmentplus.book_appointment WHERE Status = ? AND DoctorName= ? AND Booking_Date = ? AND Booking_Time = ?",[Status,DoctorName,Booking_Date,Booking_Time], function(error, results, fields) 
                {
                  if (results.length > 0)
                  {
                    return res.status(200).send({message:"success"});
                  }
                  else
                  {
                    return res.send({message:"failure"});
                  }
                }
                );
              }
    
            }); 
        }
    });

});

module.exports = router;

