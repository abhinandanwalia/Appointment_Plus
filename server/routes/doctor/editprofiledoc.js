//Author NAME: Abhinandan Walia STUDENT ID: B00820613

var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

router.post('/editprofiledoc', function(req, res, next) 
{
  var email = req.body.email;
 con.getConnection (function(err) 
    {
     console.log("connected");
         if(err)
          {
                res.send(500,"SQL Error");
          }
        else
         {
           con.query("Select licenseNumber,firstName, lastName, email, password, address, phone, city, dateofBirth, postalCode, province from appointmentplus.doctor where email = '"+email+"'" , function (err,result,fields) 
            {
             if(err)
              {
                res.send(500,"Query error"+err);
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

