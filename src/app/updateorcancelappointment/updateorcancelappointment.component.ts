import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService} from '../getdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateorcancelappointment',
  templateUrl: './updateorcancelappointment.component.html',
  styleUrls: ['./updateorcancelappointment.component.css']
})
export class UpdateorcancelappointmentComponent implements OnInit {

  invaliddate: boolean;
  datenull: boolean;
  docnameInput : string;
  appodateInput : string;
  invalidtime: boolean;
  nulltime: boolean;
  docnull: boolean;
  aptime: boolean;
  timeslot = [{"nulltime":false,"invalidtime":false}];
  
  constructor(private route: ActivatedRoute,
    private router: Router,private getData : GetdataService) { }
  
  ngOnInit() { 
    var usertype =sessionStorage.getItem("userType");
    if(usertype == "patient")
    {
      console.log("Correct");
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

  popup() {}

  validate() {
    // --AUTHOR: Aishvarya Narayanan--

    var date = (<HTMLInputElement>document.getElementById("lblDateOfAppointment")).value;
    if (date != "") 
    {
       // <!-- Cancel Doctor Appointment -->
    // <!--AUTHOR NAME: Varsha Sridhar-->
    // <!-- STUDENT_ID: B00791643 -->
    
      var re = new RegExp("^(((0[1-9]|[12][0-9]|30)[-](0[13-9]|1[012])|31[-](0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-]02)[-][0-9]{4}|29[-]02[-]([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$");

      if (re.test(date)) {
        this.invaliddate = false;
        this.datenull = false;
      }
      else {
        this.invaliddate = true;
        this.datenull = false;
      }

    }
    else if (date == "") {

      this.datenull = true;
      this.invaliddate = false;
    }
    for(var i=0;i< this.timeslot.length; i++){
    var time = (<HTMLInputElement>document.getElementById(i.toString())).value;
    if (time != "") {
            
       // <!-- Cancel Doctor Appointment -->
    // <!--AUTHOR NAME: Varsha Sridhar-->
    // <!-- STUDENT_ID: B00791643 -->
      var re = new RegExp("^(((1[0-2]|0?[1-9]):([0-5]?[0-9])(((\ )*[ap]m)))((\)*-(\)*)((1[0-2]|0?[1-9]):([0-5]?[0-9])(((\)*[ap]m))))?$");


      if (re.test(time)) {

        this.timeslot[i]["invalidtime"] = false;
        this.timeslot[i]["nulltime"] = false;
      }
      else {
        this.timeslot[i]["nulltime"] = false;
        this.timeslot[i]["invalidtime"] = true;
      }
    }
    else if (time == "") {

      this.timeslot[i]["nulltime"] = true;
      this.timeslot[i]["invalidtime"] = false;
    }
  }

    var doc = (<HTMLInputElement>document.getElementById("lblName")).value;
    if (doc == "") {
      this.docnull = true;
    }
    else {
      this.docnull = false;
    }



    if (!this.docnull && !this.nulltime && !this.datenull && !this.invaliddate && !this.invalidtime) {
      this.cancelappo(); 
    }

  }
  cancelappo(){
  // <!-- Cancel Doctor Appointment -->
    // <!--AUTHOR NAME: Varsha Sridhar-->
    // <!-- STUDENT_ID: B00791643 -->

    var tsl ='';
    for(var i=0; i<this.timeslot.length;i++){
      tsl += this.timeslot[i][i];
   }
  
    console.log("entered here");
    console.log(tsl);
    console.log(this.docnameInput);
    console.log(this.appodateInput);
     var appointmentDetails = {"DoctorName" :this.docnameInput,
     "Booking_Date" :this.appodateInput,
      "Booking_Time" : tsl
      };

     this.getData.cancelAppointment(appointmentDetails).subscribe((data)=>
    this.cancelalert(data)
    );
 
   }

   logout()
   {
     sessionStorage.clear();
     this.router.navigate(['/home'])
   }

   cancelalert(data){
    // <!-- Cancel Doctor Appointment -->
    // <!--AUTHOR NAME: Varsha Sridhar-->
    // <!-- STUDENT_ID: B00791643 -->

    console.log("data"+ data);
    if(data.message == "success"){
      Swal.fire('Success',
        'Your appointment has been Cancelled!!'
    );
    }   
    else
    {
      Swal.fire('Error!',
      'Please Enter Valid Appointment Details!!');
    }
  }

 

}

