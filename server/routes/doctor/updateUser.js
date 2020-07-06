//Author NAME: Abhinandan Walia STUDENT ID: B00820613

var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

router.post('/updateDoctorUser', function(req, res, next) {
    firstName = req.body.firstName;
    lastName =  req.body.lastName;
    email = req.body.email;
    password = req.body.password;
    dateofBirth = req.body.dateofBirth;
    address = req.body.address;
    phone = req.body.phone;
    city = req.body.city;
    province = req.body.province;
    postalCode = req.body.postalCode;
   con.getConnection(function(err) 
   {
     //console.log("connected");
     if(err){
      res.send(500,"SQL Error");
    }
    else{
     con.query("update appointmentplus.doctor set password='"+ password+"', address='"+ address+"',phone='"+ phone+"',city='"+ city+"',province='"+ province+"',postalCode='"+ postalCode +"' where email='"+email+"'", function (err, result, fields) {
      if(err){
      res.send(500,"Querry Error "+err);
      }
      else
      {
          return res.status(200).send({message:"success"});
      }
  });
  }
});
});

module.exports = router;