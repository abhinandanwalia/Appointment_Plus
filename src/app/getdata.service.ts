//Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
//Contributer Name: Varsha Sridhar STUDENT ID:B00791643
//Contributer Name: Abhinandan Walia STUDENT ID:B00820613
//Contributer Name: Dharmambal Sureshkumar STUDENT ID:B00824492
//Contributer Name : Ashutosh Patil Student ID : B00812667

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface LoginData{
  //Contributer Name : Ashutosh Patil Student ID : B00812667
  "message":string;
  "userType":string;
  "username":string;
  "email":string;
  }
  
  export interface forgotpasswordData{
    //Contributer Name : Ashutosh Patil Student ID : B00812667
    "message":string;
    "emailID":String;
    "password":string;
  }
export interface getDocAppointment{
//-- Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
  result : [{        
  FirstName: String,
  LastName: String,
  Booking_Date: String,
  phone:String,
  Booking_Time: String,
  Status: String
  }];
}


export interface ManageAppt{
  // --AUTHOR: Varsha Sridhar STUDENT_ID: B00791643

  DoctorName: string;
  Booking_Date: string;
  Booking_Time: string;
  Status: string;
}

export interface fetchProfile{ //Abhinandan Walia BID:B00820613
  result : [{
  licenseNumber :string;
  firstName :string;
  lastName :string;
  email :string;
  password :string;
  address :string;
  phone :string;
  city :string;
  dateofBirth :string; 
  postalCode :string;
  province :string;
}];
}

export interface getDateAndTime{

  //Dharmambal Sureshkumar B00824492
  "date": String;
   "timesolts": String;
   "doctorname": String;
}

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private subject = new Subject<any>();
  createAppointmentURL = "http://129.173.22.35:12345/createNewAppointment";//Aishwarya Narayanan B00820313
  createPatientUserURL = "http://129.173.22.35:12345/createPatientUser"; //Abhinandan Walia BID:B00820613
  createDoctorUserURL = "http://129.173.22.35:12345/createDoctorUser"; //Abhinandan Walia BID:B00820613

  UpdatePatientURL = "http://129.173.22.35:12345/updatePatientUser"; //Abhinandan Walia BID:B00820613
  UpdateDoctorURL = "http://129.173.22.35:12345/updateDoctorUser"; //Abhinandan Walia BID:B00820613

  fetchProfileDataURL = "http://129.173.22.35:12345/fetchProfileData"; //Abhinandan Walia BID:B00820613
  fetchProfileDataDocURL = "http://129.173.22.35:12345/fetchProfileDataDoc"; //Abhinandan Walia BID:B00820613

  userInfoURL = "http://129.173.22.35:12345/editprofile"; //Abhinandan Walia BID:B00820613
  DocUserInfoURL = "http://129.173.22.35:12345/editprofiledoc"; //Abhinandan Walia BID:B00820613
  
  canceldocAppointmentURL = "http://129.173.22.35:12345/canceldocAppointment";
  manageappointmentURL = "http://129.173.22.35:12345/manageappointment";
  getDocAppointmentURL = "http://129.173.22.35:12345/getDocAppointment";//Aishwarya Narayanan B00820313
  bookAppointmentURL="http://129.173.22.35:12345/bookappointment";//Dharmambal Sureshkumar B00824492
  getAppointmentTiming="http://129.173.22.35:12345/dateandtime";//Dharmambal Sureshkumar B00824492
  loginUserURL ="http://129.173.22.35:12345/login";
  forgotPasswordURL = "http://129.173.22.35:12345/forgotpassword";

  
  editAppointmentURL = "http://129.173.22.35:12345/editAppointment";//Aishwarya Narayanan B00820313
  medicalRecordsURL="http://129.173.22.35:12345/medicalrecords/";
  getMedicalRecordsURL="http://129.173.22.35:12345/medicalrecords/getrecords/"
  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

createAppointment(appointmentDetails) {
  //Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
  return this.http.post<string>(this.createAppointmentURL, appointmentDetails)
    .pipe();
}


editAppointment(appointmentDetails) {
  //Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
  return this.http.post<string>(this.editAppointmentURL, appointmentDetails)
    .pipe();
}

//abhinandan Walia BID:B00820613
createPatientUser(details) {
  return this.http.post<string>(this.createPatientUserURL, details)
    .pipe();
}
//abhinandan Walia BID:B00820613
createDoctorUser(details) {
  return this.http.post<string>(this.createDoctorUserURL, details)
    .pipe();
}

//abhinandan Walia BID:B00820613
updatePatientDB(details) {
  return this.http.post<string>(this.UpdatePatientURL, details)
    .pipe();
}
//abhinandan Walia BID:B00820613
updateDocDB(details) {
  return this.http.post<string>(this.UpdateDoctorURL, details)
    .pipe();
}

//Abhinandan Walia B00820613
fetchProfileData(email)
{
return this.http.post<fetchProfile>(this.fetchProfileDataURL,email)
  .pipe();
}
//Abhinandan Walia B00820613
fetchProfileDataDoc(email)
{
return this.http.post<fetchProfile>(this.fetchProfileDataDocURL,email)
  .pipe();
}
//Abhinandan Walia B00820613
getUserInfo(email)
{
return this.http.post<fetchProfile>(this.userInfoURL,email)
  .pipe();
}
//Abhinandan Walia B00820613
getDocUserInfo(email)
{
  return this.http.post<fetchProfile>(this.DocUserInfoURL,email)
  .pipe();
}
cancelAppointment(appointmentDetails) {
  // --AUTHOR: Varsha Sridhar STUDENT_ID: B00791643

return this.http.post<string>(this.canceldocAppointmentURL, appointmentDetails)
.pipe();
}

manageAppointment() {
  // --AUTHOR: Varsha Sridhar STUDENT_ID: B00791643

return this.http.get<Array<ManageAppt>>(this.manageappointmentURL)
.pipe();
}

getDocAppointment(docId){
  //Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
  return this.http.post<getDocAppointment>(this.getDocAppointmentURL, docId)
    .pipe();
}

bookAppointment(details){
  //Dharmambal Sureshkumar B00824492
  return this.http.post<string>(this.bookAppointmentURL, details)
  .pipe();
}

dateandtime(){
  //Dharmambal Sureshkumar B00824492
  return this.http.get<Array<getDateAndTime>>(this.getAppointmentTiming)
  .pipe();
}
forgotpassword(forgotpasswordDetails)
{//Contributer Name : Ashutosh Patil Student ID : B00812667
  return this.http.post<forgotpasswordData>(this.forgotPasswordURL, forgotpasswordDetails)
  .pipe();
}
loginUser(details)
{//Contributer Name : Ashutosh Patil Student ID : B00812667
  return this.http.post<LoginData>(this.loginUserURL,details)
  .pipe();
}
createNewMedicalRecord(record:any){
  this.http.post(this.medicalRecordsURL,record)
     .subscribe(responseData =>{
        console.log(responseData);
     });
}

getMedicalRecords(){
  return this.http.get(this.getMedicalRecordsURL);
}
  
}
