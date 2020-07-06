//AUTHOR
//NAME : Varsha Sridhar
//STUDENT ID : B00791643
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

/* Viewing doctor's appointment-Varsha Sridhar B00791643 */
router.get('/manageappointment', function(req, res, next) 
{
 
 
 con.getConnection (function(err) 
    {
     console.log("connected");
         if(err)
          {
                res.send(500,"SQL Error");
          }
        else
         {
           con.query("Select DoctorName,Booking_Date,Booking_Time,Status from appointmentplus.book_appointment", function (err,result,fields) 
            {

             if(err)
              {
                res.send(500,"Query error");
              }
             else
              {
                 console.log("connected");
                 console.log(result);
                 return res.send(result);
              }
    
            });
        }
    });

});

module.exports = router;

