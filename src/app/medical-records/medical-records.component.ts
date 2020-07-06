// Developed by AkhilTeja Ambadipdi B00825307
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GetdataService } from '../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {
  imageSrc:string="";
  showforum:boolean=false;
  patient_name:String="";
  patient_id:String="";
  patient_description:String="";
  patient_name_validation:boolean=true;
  patient_id_validation:boolean=true;
  patient_record_validation:boolean=true;
  patient_valid_id_validation:boolean=true;
  patient_description_validation:boolean=true;
  patient_records:any;
  
  searchstring:String="";
  constructor(private route: ActivatedRoute,
    private router: Router,private getdataService: GetdataService) { }

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
      
    }
    this.imageSrc="";
    this.showforum=false;
    this.patient_name="";
    this.patient_id="";
    this.patient_description="";
    this.patient_name_validation=true;
    this.patient_id_validation=true;
    this.patient_record_validation=true;
    this.patient_valid_id_validation=true;
    this.patient_description_validation=true;
    this.patient_records=[];
    this.getrecords();
    this.searchstring="";
   
  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /pdf-*/;
    var reader = new FileReader();
    
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    else if(file.size/1024/1024 > 0.06){
      alert("This file size is to large please upload below 50 kb");
      return;
    }
    else{
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    //this.showPdf(this.imageSrc);
    // window.open("data:application/pdf," + encodeURI(this.imageSrc)); 
    // window.open("data:application/octet-stream;charset=utf-16le;base64,"+resultpdf);
    // window.open("data:application/pdf," +resultpdf); 
    
    // console.log(this.imageSrc);
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }
  downloadPdf(pdfbase64,patientid){
    const downloadelement = document.createElement("a");
    downloadelement.href=pdfbase64;
    downloadelement.download=patientid+".pdf";
    downloadelement.click();
  }
  showPdf(pdfbase64) {
   
     const convertedArray = new Uint8Array(atob(pdfbase64.substring(28)).split('').map(char => char.charCodeAt(0)));
     
     window.open( window.URL.createObjectURL(new Blob([convertedArray], {type: 'application/pdf'})));
 
}
hideOrShowForm(){
  if(this.showforum){
    this.showforum=false;
  }
  else{
    this.showforum=true;
  }
  this.getrecords();
}
submit_record(){
 if(this.patient_name ==""){
   this.patient_name_validation=false;
 }
 else{
   this.patient_name_validation=true;
 }
 if(this.patient_id ==""){
   this.patient_id_validation=false;
 }
 else{
   this.patient_id_validation=true;
 }
 if(this.patient_id.length !=8 && this.patient_id_validation ){
  this.patient_valid_id_validation=false;
 }
 else{
  this.patient_valid_id_validation=true;
 }
 if(this.imageSrc ==""){
   this.patient_record_validation=false;
 }
 else{
   this.patient_record_validation=true;
 }
 if(this.patient_description==""){
   this.patient_description_validation=false;
 }
 else{
   this.patient_description_validation=true;
 }
 if( this.patient_name_validation && this.patient_record_validation && this.patient_description_validation){
  var newrecord={
    patientid:this.patient_id,
    patientname:this.patient_name,
    patientdescription:this.patient_description,
    record:this.imageSrc
  }
  this.getdataService.createNewMedicalRecord(newrecord);
  alert("Record created successfully");
  setTimeout(() => 
{
  this.getrecords();
  this.hideOrShowForm();
},
2000);
  
 }
 
}
getrecords(){
  this.getdataService.getMedicalRecords().subscribe(records =>{
      
    this.patient_records=records["message"];
    debugger;
    for(var data in this.patient_records){
      this.patient_records[data]["elementshow"]=[];
      this.patient_records[data]["elementshow"].push(true);
    }
  });
  
}
searchpatient(){
  if(this.searchstring ==""){
 this.getrecords();
  }
  else{
    
    for(var data in this.patient_records){
      if (this.patient_records[data].patientid.indexOf(this.searchstring) == -1) {
        this.patient_records[data].elementshow=false;
      }
    }
  }
  

  
}

}
