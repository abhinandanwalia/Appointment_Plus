//AUTHOR
//NAME : Ashutosh Patil
//STUDENT ID : B00812667

import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  
  enull: boolean;
  einvalid: boolean;
  indexat: any;
  indexdot: any;
  
  constructor(private route: ActivatedRoute,
    private router: Router,private getData:GetdataService) {

  }

  ngOnInit() {
    var usertype =sessionStorage.getItem("userType");
    if(usertype == "patient")
    {
      this.router.navigate(['/bookappointment']);
    }
    else if(usertype ==null)
    {
      this.router.navigate(['/home']);

    }
    else if(usertype=="doctor")
    {
      this.router.navigate(['/doctor']);
    }
  }

  validate() {
    this.einvalid = false;
    this.enull = false;
    var emailID = (<HTMLInputElement>document.getElementById("email")).value;
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
      
    if (!this.enull && !this.einvalid) {
             
        var forgotpasswordDetails = {
           'email':emailID,
          
        };
        this.getData.forgotpassword(forgotpasswordDetails).subscribe((data)=>
         this.onValidateUser(data)
        )
    
      
      // this.router.navigate(['/bookappointment']);
    }
      else{
        // this.router.navigate(['/bookappointment']);
      }

     
    }
    onValidateUser(data){

      if(data.message=="email sent")
      {
      
        Swal.fire(
          'Email sent!',
          'Password has been sent to your email!',
          'success'
        );
        this.router.navigate(['/home']);
        
    }
    else
    {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'User not found!',
       
      })
    }

}
}
