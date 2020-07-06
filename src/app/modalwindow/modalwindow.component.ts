import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GetdataService} from '../getdata.service' ;
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modalwindow',
  templateUrl: './modalwindow.component.html',
  styleUrls: ['./modalwindow.component.css']
})
export class ModalwindowComponent implements OnInit {

  name : string;
  cancel = "cancel";
  completed = "completed";
  constructor(public activeModal: NgbActiveModal,private getData:GetdataService) { }

  ngOnInit() {
     console.log(this.name);
  }

  passBack() {
this.activeModal.close();
}

 updateAppointment(data){

    if(data == "cancel"){
   
    var details = {
    "idbook_appointment":this.name["idbook_appointment"],
    "Status":"Cancelled"
    }
     this.getData.editAppointment(details).subscribe((data)=>
   this.successMsg(data,"Cancelled")
   );
  
   this.activeModal.close();
 }
  if(data == "completed"){
     var details = {
    "idbook_appointment":this.name["idbook_appointment"],
    "Status":"Completed"
    }
     this.getData.editAppointment(details).subscribe((data)=>
   this.successMsg(data,"Completed")
   );
   this.activeModal.close();
  }

  }

   successMsg(data,status){
   if(data.message == "success"){
       this.getData.sendMessage("refresh");
        Swal.fire(
        'Your appointment status has been changed to '+status
      );
      }   
    }
    
}
