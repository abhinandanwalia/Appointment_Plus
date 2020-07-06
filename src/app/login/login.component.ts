//AUTHOR
//NAME : Ashutosh Patil
//STUDENT ID : B00812667
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from '../getdata.service';
import {LoginData} from '../getdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: String;
  enull: boolean;
  pnull: boolean;
  einvalid: boolean;
  indexat: any;
  indexdot: any;
  loginMsg : LoginData;

  constructor(private route: ActivatedRoute,
    private router: Router,private getData:GetdataService) {

  }

  ngOnInit() {

    var usertype =sessionStorage.getItem("userType");
    if(usertype == "patient")
    {
      this.router.navigate(['/bookappointment']);
    }
    else if(usertype=="doctor")
    {
      this.router.navigate(['/doctor']);
    }

    this.route.queryParams
      .subscribe(params => {
        this.user = params['usr'];

      });
    if (this.user == "doctor") {
      document.body.className = "selectordoctor";
    }
    else {
      document.body.className = "selectpatient";
    }


  }

  validate() {
    this.einvalid = false;
    this.enull = false;
    var emailID = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;

    this.indexat = emailID.indexOf("@");
    this.indexdot = emailID.lastIndexOf(".");

    if (emailID != "") {
      if (this.indexat < 1 || (this.indexdot - this.indexat < 2)) {

        this.einvalid = true;
        this.enull = false;
      }

    }
    else {
      this.einvalid = false;
      this.enull = true;
    }

    if ((<HTMLInputElement>document.getElementById("email")).value == "") {
      this.enull = true;
    }
    if ((<HTMLInputElement>document.getElementById("password")).value == "") {
      this.pnull = true;
    }
    else {
      this.pnull = false;
    }

    console.log(this.user);

    if (!this.enull && !this.pnull && !this.einvalid) {
      if (this.user == "patient") {
       
        var userdetails = {
          'usertype':"patient",
          'email':emailID,
          'password':password,

        };
        this.getData.loginUser(userdetails).subscribe((data)=>
         this.onValidateUser(data)
        )
      }
      else if(this.user=="doctor")
      {
        var docDetails = {
          'usertype':"doctor",
          'email':emailID,
          'password':password,

        };
        this.getData.loginUser(docDetails).subscribe((data)=>
         this.onValidateUser(data)
        )
      }
      // this.router.navigate(['/bookappointment']);
    }
      else{
        // this.router.navigate(['/bookappointment']);
      }

     
    }
  
    onValidateUser(data){
      console.log(data);
    
      if(data.usertype=="patient" && data.message =="Correct Users Credentials")
      {
        sessionStorage.setItem("userType",'patient');
        sessionStorage.setItem("username",data.username);
       

        sessionStorage.setItem("email",data.email);
        var username = data.username;
        Swal.fire(
          'Login Success!',
          'Welcome to Appointment Plus, '+username+'!',
          'success'
        );
        this.router.navigate(['/bookappointment']);
      }
      else if(data.usertype=="patient" && data.message =="Wrong Users Credentials")
      {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Incorrect Credentials !',
         
        })
      }
      else if(data.usertype=="doctor" && data.message =="Correct Users Credentials")
      {
        sessionStorage.setItem("userType",'doctor');
        sessionStorage.setItem("docfirstname",data.username);
         sessionStorage.setItem("id",data.docid);
        sessionStorage.setItem("doclastname",data.lastname);
        sessionStorage.setItem("email",data.email);
        var username = data.username;
        Swal.fire(
          'Login Success!',
          'Welcome to Appointment Plus DR, '+username+'!',
          'success'
        );
        this.router.navigate(['/doctor']);
      }
      else if(data.usertype=="doctor" && data.message =="Wrong Users Credentials")
      {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Incorrect Credentials !',
         
        })

      }


    }

  // storeData(details)
  // {
    

  // sucessMsg(data){
       
  //   console.log("data"+ data);
  //   if(data.message == "success"){
  //     Swal.fire(
  //     'Thank You!',
  //     'Your schedule has been created!',
  //     'success'
  //   );
  //   }
  //   else
  //   {

  //   }   
  // }

  ngOnDestroy() {
    document.body.className = "";
  }
}
