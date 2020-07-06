import { Component, OnInit,Input  } from '@angular/core';
import { GetdataService} from '../getdata.service';
import {getDocAppointment } from '../getdata.service';
import { ModalwindowComponent} from '../modalwindow/modalwindow.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() name;
   subscription: Subscription;
  all = "all";
  cancel = "Cancelled";
  completed = "Completed";
  upcoming = "Upcoming";
  appointments ;
  result ;
  firstname;
  lastname;
  docid;
  constructor(private route: ActivatedRoute,private router: Router,
   private getData : GetdataService,private modalService: NgbModal) {
     var docid = sessionStorage.getItem("id");
     this.subscription = this.getData.getMessage().subscribe(message => {
       console.log(message);
         this.getData.getDocAppointment({docId : docid}).subscribe((data)=>
        this.check(data));
     
        });
   }

  ngOnInit() {

     var usertype =sessionStorage.getItem("userType");
     this.firstname = sessionStorage.getItem("docfirstname");
     this.lastname = sessionStorage.getItem("doclastname");
      this.docid = sessionStorage.getItem("id");
     console.log(sessionStorage);
    // if(usertype == "patient")
    // {
      
    //   this.router.navigate(['/bookappointment']);
    // }
    if(usertype ==null)
    {
      this.router.navigate(['/home']);

    }
    // else if(usertype=="doctor")
    // {
      
    // }

   var docId ={docId : this.docid}; 
    this.getData.getDocAppointment(docId).subscribe((data)=>
   this.check(data)
   );
  }

  navigate(){
    this.router.navigate(['/createappointment']);
  }

    open(content,appData) {
      event.preventDefault();
      console.log(content,appData);
     const modalRef = this.modalService.open(ModalwindowComponent, {ariaLabelledBy: 'modal-basic-title'});
     modalRef.componentInstance.name = appData;
  }

  check(data){
     this.appointments = data;
     for(var i=0;i<this.appointments.length;i++){
      if(this.appointments[i]["Status"] == "booked"){
        this.appointments[i]["Status"] = "Upcoming";
      }
    }
     this.result = this.appointments;

  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }

  filter(data){
    event.preventDefault();
    console.log(data);
    this.result = [];
    if(data != "all"){
     for(var i=0;i<this.appointments.length;i++){
      if(this.appointments[i]["Status"] == data){
       this.result.push(this.appointments[i]); 
      }
    }
    }
  else
    {
      this.result = this.appointments; 
    }
  }

 


}
