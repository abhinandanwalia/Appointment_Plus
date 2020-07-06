import { Component, OnInit,HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostListener("window:onbeforeunload",["$event"])
  clearLocalStorage(event){
    sessionStorage.clear();
  }

  constructor(private route: ActivatedRoute,private router: Router,) { }

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
  

}
