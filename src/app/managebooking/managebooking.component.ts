// <!-- Manage Booking-To View  Appointment Details -->
// <!--AUTHOR NAME: Varsha Sridhar-->
// <!-- STUDENT ID: _B00791643 -->
import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';
import { HttpClient } from '@angular/common/http';
import {ManageAppt} from '../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  data: Array<ManageAppt>;

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
    
    this.getData.manageAppointment().subscribe(data=> this.data = data);
  
    }

    logout()
    {
      sessionStorage.clear();
      this.router.navigate(['/home'])
    }

}

