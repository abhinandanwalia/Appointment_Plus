//Author NAME : Aishwarya Narayanan STUDENT ID: B00820313
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

/* Fetching specific doctor appointment*/
router.post('/getDocAppointment', function(req, res, next) {
    console.log(req.body);
    var docName = req.body.docName;
    var docId = req.body.docId;
   
 con.getConnection(function(err) {
     console.log("connected");
  if(err){
    console.log(err);
    res.send(500,"SQL Error");
  }
  else{
    console.log("else part");
 con.query("select idbook_appointment,FirstName,LastName,phone,Booking_Date,Booking_Time,Status from appointmentplus.book_appointment where docid="+ docId +" ", function (err, result, fields) {
   //con.query("insert into appointmentplus.newappointmentdoctor values(10,'12-11-1995','10am-3pm,4am-5pm','Rodrick paul','IWK hospital','')", function (err, result, fields) {
  if(err){
    console.log(err);
    res.send(500,"Query error");
    }else{
    console.log("connected");
    console.log(result);
    var appointmentResults = result;
    console.log(appointmentResults)
    return res.status(200).send(result);
    }
    
  });
  }
});

});

module.exports = router;

