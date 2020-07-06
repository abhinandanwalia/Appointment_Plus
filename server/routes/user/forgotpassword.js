//AUTHOR
//NAME : Ashutosh Patil
//STUDENT ID : B00812667
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* creating appointment schedule*/
function sendemail(emailid,password,callback)
{
    var body = "Your Password is ";
    body +=password;

    console.log("Going to mail code");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'abchealthcare.macs@gmail.com',
               pass: 'abchealthcare12'
           }
       });

       console.log("Going to mail options");
       const mailOptions = {
        from: 'abchealthcare.macs@gmail.com', // sender address
        to: emailid, // list of receivers
        subject: 'Recover Password', // Subject line
        text:'Hello',
        html:'<html><body><p>Your password is :'+password+'</p></body></html>',// plain text body
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
        {
          console.log(info);
          console.log("Email sent");
          return callback("email sent");
        }
     });

      
    
}

router.post('/forgotpassword', function(req, res, next) {
     
    var email = req.body.email;
           console.log(email);
 con.getConnection(function(err) {
    
  if(err){
    
    res.send(500,"SQL Error");
  }
  else{
    console.log("Going to patient");
 con.query("SELECT email,password FROM appointmentplus.user WHERE email='"+email+"'", function (err, results, fields) {
 
   if (err) 
   {
      return res.json(err);
   }
   if(results.length >0){
       console.log("Email obtained");
      
    var emailid =results[0].email;
    var password = results[0].password;
    sendemail(emailid,password,function(response)
    {
        if(response=="email sent")
        {
            res.send({"message":"email sent","emailID":emailid,"password":""});
        }

    });
     
   }
   else{
      console.log("fetching from doctor");
   con.query("SELECT email,password FROM appointmentplus.doctor WHERE email='"+email+"'", function (err, results, fields) {

        if (err) 
        {
           return res.json(err);
        }
        if(results.length >0){
           
         var emailid =results[0].email;
         var password = results[0].password;
         console.log(password);
         sendemail(emailid,password,function(response)
         {
             if(response=="email sent")
             {
                res.send({"message":"email sent","emailID":emailid,"password":""});
             }
     
         });
           
           
        }
        else{
            res.send({"message":"Not Registered","emailID":email,"password":""});
        }
      
   });
  }
     



  

});
  }
  
  

 });

  }
 );

module.exports = router;


