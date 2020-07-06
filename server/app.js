//AUTHOR NAME : AISHWARYA NARAYANAN STUDENT ID : B00820313
//Contributer Name: Varsha Sridhar STUDENT ID:B00791643
//Contributer Name: Abhinandan Walia STUDENT ID:B00820613



var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createDocSchedule = require('./routes/doctor/createSchedule');//Aishwarya Narayanan B00820313

var createPatientUser = require('./routes/user/registerUser'); //Abhinandan Walia STUDENT ID:B00820613
var createDoctorUser = require('./routes/doctor/registerUser'); //Abhinandan Walia STUDENT ID:B00820613

var updatePatientUser = require('./routes/user/updateUser'); //Abhinandan Walia STUDENT ID:B00820613
var updateDoctorUser = require('./routes/doctor/updateUser'); //Abhinandan Walia STUDENT ID:B00820613

var fetchProfileData = require('./routes/user/fetchProfileData'); //Abhinandan Walia STUDENT ID:B00820613
var fetchProfileDocData = require('./routes/doctor/fetchProfileDataDoc'); //Abhinandan Walia STUDENT ID:B00820613

var editprofile = require('./routes/user/editprofile');//Abhinandan Walia STUDENT ID:B00820613
var editprofiledoc = require('./routes/doctor/editprofiledoc');//Abhinandan Walia STUDENT ID:B00820613

var bookappointment=require('./routes/patients/bookappointment');
var dateandtime=require('./routes/patients/dateandtime');

var cancelappointment = require('./routes/patients/canceldocAppointment');//Varsha Sridhar STUDENT ID:B00791643
var manageapps = require('./routes/patients/manageappointment');//Varsha Sridhar STUDENT ID:B00791643

var getDocAppointment = require('./routes/doctor/getAppointments.js');

var blog = require('./routes/doctor/createblog');//Akhil Ambadipdi B00825307

var userLogin = require('./routes/user/user');//Ashutosh Patil STUDENT ID : B00812667
var forgotPassword = require('./routes/user/forgotpassword');//Ashutosh Patil STUDENT ID : B00812667
var editDocAppointment = require('./routes/doctor/editAppointment');//Aishwarya Narayanan B00820313
var medicalrecords= require('./routes/doctor/medicalrecords');

var app = express();
app.use(cors());

app.use(session({
  key: 'user_sid',
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/bookappointment',bookappointment);//Dharmambal Sureshkumar B00824492
app.get('/dateandtime',dateandtime);//Dharmambal Sureshkumar B00824492
//forwarding the requests to appropriate routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs',blog);
app.use('/medicalrecords',medicalrecords);
app.use('/medicalrecords/getrecords',medicalrecords);
app.post('/createNewAppointment', createDocSchedule);//Aishwarya Narayanan B00820313

app.post('/createPatientUser',createPatientUser); //Abhinandan Walia STUDENT ID:B00820613
app.post('/createDoctorUser',createDoctorUser); //Abhinandan Walia STUDENT ID:B00820613

app.post('/updatePatientUser',updatePatientUser); //Abhinandan Walia STUDENT ID:B00820613
app.post('/updateDoctorUser',updateDoctorUser); //Abhinandan Walia STUDENT ID:B00820613

app.post('/fetchProfileData', fetchProfileData);//Abhinandan Walia STUDENT ID:B00820613
app.post('/fetchProfileDataDoc',fetchProfileDocData);//Abhinandan Walia STUDENT ID:B00820613

app.post('/editprofile',editprofile);//Abhinandan Walia STUDENT ID:B00820613
app.post('/editprofiledoc',editprofiledoc);//Abhinandan Walia STUDENT ID:B00820613

app.post('/canceldocAppointment', cancelappointment);//Varsha Sridhar STUDENT ID:B00791643
app.get('/manageappointment', manageapps);//Varsha Sridhar STUDENT ID:B00791643
app.post('/getDocAppointment',getDocAppointment);//Aishwarya Narayanan B00820313
app.post('/login',userLogin);//Contributer Name: Ashutosh Patil STUDENT ID:B00812667
app.post('/forgotpassword',forgotPassword);//Contributer Name: Ashutosh Patil STUDENT ID:B00812667
app.post('/editAppointment',editDocAppointment);//Aishwarya Narayanan B00820313


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404 + err));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
