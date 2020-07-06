//AUTHOR
//NAME : Dharmambal Sureshkumar
//STUDENT ID : B00824492
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.post('/bookappointment', function(req, res, next)
{
    console.log("entered")
    
        var book_appointmentID = req.body.appId;
        var FirstName = req.body.FirstName;
        var LastName = req.body.LastName;
        var Email = req.body.Email;
        var number = req.body.number;
        var Doctorname = req.body.Doctorname;
        var Bookdate=req.body.Bookdate;
        var Booktime=req.body.Booktime;
        var reason=req.body.reason;
        var status=req.body.status;
        var docId = req.body.docId;
        con.getConnection(function(err) {
            console.log("connected");
         if(err){
           console.log(err);
           res.send(500,"SQL Error");
         }
         else{
            con.query("insert into appointmentplus.book_appointment values("+ book_appointmentID+",'"+ FirstName+"','"+LastName +"','"+ Email+"','"+number+"','"+Doctorname +"','"+docId +"','"+Bookdate+"','"+Booktime+"','"+reason+"','"+status+"')", function (err, result, fields) {
               if(err){
                 console.log(err);
               res.send(500,"Query error");
               }else{
               console.log("connected");
               console.log(result);

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
   to: Email,
   subject: "Booking Successful",
   generateTextFromHTML: true,
   html: "<h4> Hello "+FirstName+" "+LastName+",</h4> <br> <p> Your Appointment with "+Doctorname+" on "+Bookdate+" at "+Booktime+" shas been confirmed.</p> <br> <p>Regards,<br>Abhinandan Walia<br>Team AppointmentPlus.</p>" 
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
