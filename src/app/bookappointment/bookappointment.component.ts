//Dharmambal Sureshkumar B00824492

import { Component, OnInit,HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetdataService, getDateAndTime } from '../getdata.service';

import * as _ from 'lodash'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  @HostListener("window:onbeforeunload",["$event"])
  clearLocalStorage(event){
    sessionStorage.clear();
  }
  user: String;
  enull: boolean;
  pnull: boolean;
  einvalid: boolean;
  indexat: any;
  fname: string;
  indexdot: any;
  lname: string;
  email: string;
  phone: string;
  book_date: string;
  book_time: string;
  reason: string;
  status: "completed";
  dateandtime: Array<getDateAndTime>;
  doctor: string;
  selectedDate: string;
  selectedTime: string;
  dateonly: Array<getDateAndTime>;
  timeonly: Array<getDateAndTime> = [];
  doctorList;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private getData: GetdataService) {

  }

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
    this.getData.dateandtime().subscribe((data) =>
      this.dispDateAndTime(data)
    );
    //document.body.className = "healthcare";
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
    if ((<HTMLInputElement>document.getElementById("fname")).value == "") {
      this.pnull = true;
    } else {
      this.pnull = false;
    }

    if (!this.enull && !this.pnull && !this.einvalid) {

      this.router.navigate(['/login']);
    }
  }
  
  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }

  click() {

    var details = {
      "appId": Math.floor(Math.random() * 100),
      "FirstName": this.fname,
      "LastName": this.lname,
      "Email": this.email,
      "number": this.phone,
      "Doctorname":this.doctor,
      "docId": 101,
      "Bookdate": this.selectedDate,
      "Booktime": this.selectedTime,
      "reason": this.reason,
      "status": "booked"
    };
    this.getData.bookAppointment(details).subscribe((data) =>
    this.bookValidate(data)
    );

  }
  ngOnDestroy() {
    document.body.className = "";
  }

  bookValidate(data) {
      Swal.fire(
        'Thank You!',
        'Your appointment has confirmed!'
      );
      }
    



  dispDateAndTime(data) {
    this.dateandtime = data;
    this.doctorList = _.uniqBy(this.dateandtime, 'doctorname');
    console.log(this.dateandtime);
  }
  stopReload() {
    event.preventDefault();
  }

  setDoctor(doctorName) {
     console.log(doctorName);
    this.doctor = doctorName;
    this.dateonly = _.uniqBy(this.dateandtime.filter(item => item.doctorname === this.doctor), 'date');
    this.dateandtime.forEach(item => {
      if (item.doctorname === this.doctor) {
        let splitTimeSlots = item.timesolts.split(',')
        if (splitTimeSlots.length > 0) {
          splitTimeSlots.forEach(timeSlot => {
            let obj = {
              "date": item.date,
              "timesolts": timeSlot,
              "doctorname": item.doctorname
            };
            this.timeonly.push(obj);
          });

        }
      }
    })

  }
  setDate(date) {
    // console.log(d);
    this.selectedDate = date;
  }
  setTime(time) {
    // console.log(d);
    this.selectedTime = time;
  }

}
