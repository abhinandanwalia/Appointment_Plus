//AUTHOR
//NAME : Ashutosh Patil
//STUDENT ID : B00812667
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

/* creating appointment schedule*/

router.post('/login', function(req, res, next) {
   
  
    var email = req.body.email;
    var pass = req.body.password;
    var usertype = req.body.usertype;
        
 con.getConnection(function(err) {
    
  if(err){
    
    res.send(500,"SQL Error");
  }
  else{
   if(usertype=="patient")
   {
      console.log("Going to patient")
 con.query("SELECT email,firstName FROM appointmentplus.user WHERE email='"+email+"' and password = '"+pass+"'", function (err, results, fields) {
 
   if (err) 
   {
      return res.json(err);
   }
   if(results.length >0){
      req.session.success =true;
      req.session.email = email;
      req.session.usertype=usertype;
      req.session.username=results[0].firstName;
      var firstName = results[0].firstName;
      
      console.log(req.session.success);
      console.log(req.session.username);
     
      res.send({"message":"Correct Users Credentials","usertype":"patient","username":firstName});
     
   }
   else{
      
      res.send({"message":"Wrong Users Credentials","usertype":"patient","username":""});
      
   }
  }
  );
}
else if(usertype=="doctor")
{
   console.log("Going to doc");
   
   con.query("SELECT email,firstName FROM appointmentplus.doctor WHERE email='"+email+"' and password = '"+pass+"'", function (err, results, fields) {
 
      if (err) 
      {
         return res.json(err);
      }
      if(results.length >0){
        
         req.session.success =true;
         req.session.email = email;
         req.session.usertype=usertype;
         req.session.username= results[0].firstName;
         var firstName = results[0].firstName;
         console.log(req.session.success);
         console.log(req.session.username);

         res.send({"message":"Correct Users Credentials","usertype":"doctor","username":firstName});
        
      }
      else{
         
         res.send({"message":"Wrong Users Credentials","usertype":"doctor"});
         
      }
     });
}
  }
});

}


);

module.exports = router;


