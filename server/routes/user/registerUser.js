//Author NAME: Abhinandan Walia STUDENT ID: B00820613

var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.post('/createPatientUser', function(req, res, next) {
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
    con.query("insert into appointmentplus.user values('"+ firstName+"','"+ lastName+"','"+ email +"','"+ password+"','"+ dateofBirth+"','"+ address+"','"+ phone+"','"+ city+"','"+ province+"','"+ postalCode +"')", function (err, result, fields) {
     if(err){
     res.send(500,"Querry Error "+err);
     }
     else
     {
     //console.log("connected");
     //console.log(result);
     
//Successful regisrtation send email
     async function sendEmail() {
     const oauth2Client = new OAuth2(
      "736535151881-7tfovvs8na5fl3taah3he9l55g22pcj6.apps.googleusercontent.com", // ClientID
      "ytUA8zh0XzYFjMHR08NEANq1", // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
 );
 oauth2Client.setCredentials({
  refresh_token: "1/wGdWYwJ6-BzCsFpAwScJlAFqHHouNF8SkSzAd8Cg2jY"
});
const tokens = await oauth2Client.refreshAccessToken()
const accessToken = tokens.credentials.access_token //expires after 3600 sec

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "abhinandanwalia14@gmail.com", 
       clientId: "736535151881-7tfovvs8na5fl3taah3he9l55g22pcj6.apps.googleusercontent.com",
       clientSecret: "ytUA8zh0XzYFjMHR08NEANq1",
       refreshToken: "1/wGdWYwJ6-BzCsFpAwScJlAFqHHouNF8SkSzAd8Cg2jY",
       accessToken: accessToken
  }
});
const mailOptions = {
  from: "abhinandanwalia14@gmail.com",
  to: email,
  subject: "Registration Successful",
  generateTextFromHTML: true,
  html: "<h4> Hello "+firstName+" "+lastName+",</h4> <br> <p> Your Registration with AppointmentPlus was Successful.</p> <br> <p>Regards,<br>Abhinandan Walia<br>Team AppointmentPlus.</p>" 
};
smtpTransport.sendMail(mailOptions, (error, response) => {
  error ? console.log(error) : console.log(response);
  smtpTransport.close();
});}
sendEmail();

     return res.status(200).send({message:"success"});
     }
   });
   }
 });
});

module.exports = router;

