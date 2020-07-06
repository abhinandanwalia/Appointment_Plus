//AUTHOR
//NAME : AISHWARYA NARAYANAN
//STUDENT ID : B00820313
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

/* creating appointment schedule*/
router.post('/createNewAppointment', function(req, res, next) {
    
    var appointmentId = req.body.appId;
    var date = req.body.date;
    var timeslots = req.body.timeslots;
    var docName = req.body.docname;
    var location = req.body.loc;
    var comments = req.body.comments;
    var docId = req.body.docid;

    console.log("********************",req.body);

//connecting with MySql database    
 con.getConnection(function(err) {
  if(err){
    res.send(500,"SQL Error");
  }
  else{
 con.query("insert into appointmentplus.newappointmentdoctor values("+appointmentId+",'"+ date+"','"+timeslots +"','"+ docName+"','"+ docId+"','"+location+"','"+comments +"')", function (err, result, fields) {
    if(err){
    res.send(500,"Query error");
    }else{
    console.log(result);

    //returning the success response after storing the details in the database
    return res.status(200).send({message:"success"});
    }
    
  });
  }
});

});

module.exports = router;

