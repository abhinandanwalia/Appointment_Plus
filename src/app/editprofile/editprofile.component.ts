//Author NAME: Abhinandan Walia STUDENT ID: B00820613
import { Component, OnInit,HostListener } from '@angular/core';
import { GetdataService} from '../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import {fetchProfile} from '../getdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  @HostListener("window:onbeforeunload",["$event"])
  clearLocalStorage(event){
    sessionStorage.clear();
  }
  patient:boolean;
  doc : boolean;
  phnull: boolean;
  pnull: boolean; 
  profile : fetchProfile;
  result;


  constructor(private getData : GetdataService , private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    var usertype =sessionStorage.getItem("userType");
    var email =sessionStorage.getItem("email");
    if(usertype == "patient")
    {
      this.patient=true;
      this.getData.getUserInfo({email:email}).subscribe((data)=>
      this.getinfo(data)
      );
    }
    else if(usertype ==null)
    {
      this.router.navigate(['/home']);

    }
    else if(usertype=="doctor")
    {
      this.doc=true;
    this.getData.getDocUserInfo({email:email}).subscribe((data)=>
    this.getinfo(data));
    }

  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }
  getinfo(info){
      this.profile = info;
      this.result = this.profile;
   }
   validate()
   {
    if(this.doc)
    {
      var licenseNumber = (<HTMLInputElement>document.getElementById("licenseNumber")).value;
    }
    var firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    var lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var address = (<HTMLInputElement>document.getElementById("address")).value;
    var phone = (<HTMLInputElement>document.getElementById("phone")).value;
    var city = (<HTMLInputElement>document.getElementById("city")).value;
    var dateofBirth = (<HTMLInputElement>document.getElementById("dateofBirth")).value;
    var postalCode = (<HTMLInputElement>document.getElementById("postalCode")).value;
    var province = (<HTMLInputElement>document.getElementById("province")).value;
   
    if ((<HTMLInputElement>document.getElementById("password")).value == "") {
      this.pnull = true;
    }
    else {
      this.pnull = false;
    }
    if ((<HTMLInputElement>document.getElementById("phone")).value == "") {
      this.phnull = true;
    }
    else {
      this.phnull = false;
    }
    
    if(!this.phnull && !this.pnull && this.patient)
    {
      var PatientDetails = { 
        "firstName" :firstName,
        "lastName" :lastName,
        "email" :email, 
        "password" :password,
        "address" :address,
        "phone" :phone,
        "city" :city,
        "dateofBirth" :dateofBirth, 
        "postalCode" :postalCode,
        "province" :province,
    };
    this.updatePatient(PatientDetails);
    this.router.navigate(['/profile']);
    }
    if(!this.phnull && !this.pnull && this.doc)
    {
      var DoctorDetails = { 
        "licenseNumber" :licenseNumber,
        "firstName" :firstName,
        "lastName" :lastName,
        "email" :email, 
        "password" :password,
        "address" :address,
        "phone" :phone,
        "city" :city,
        "dateofBirth" :dateofBirth, 
        "postalCode" :postalCode,
        "province" :province,
   };
   this.updateDoc(DoctorDetails);
   this.router.navigate(['/profile']);
  }
  }


  updatePatient(details)
  {
    this.getData.updatePatientDB(details).subscribe((data)=>
    this.successMsg(data)
    );
  }
  updateDoc(details)
  {
    this.getData.updateDocDB(details).subscribe((data)=>
    this.successMsg(data)
    );
  }

  successMsg(data)
  {
    if(data.message == "success")
    {
      Swal.fire
      (
        'Update Successful!',
      );
    }   
  }
  ngOnDestroy() {
    document.body.className = "";
  }
}

