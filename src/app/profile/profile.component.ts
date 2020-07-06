//Author NAME: Abhinandan Walia STUDENT ID: B00820613
import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';
import {fetchProfile} from '../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  patient:boolean;
  doc : boolean;
  profile : fetchProfile;
  result ;

  constructor(private route: ActivatedRoute,
    private router: Router,private getData : GetdataService) { }

  ngOnInit() {
    var usertype =sessionStorage.getItem("userType");
    var email =sessionStorage.getItem("email");
    console.log(email);
    if(usertype == "patient")
    {
      this.patient=true;
      this.getData.fetchProfileData({email : email}).subscribe((info)=>
      this.getinfo(info)
      );
    }
    else if(usertype ==null)
    {
      this.router.navigate(['/home']);

    }
    else if(usertype=="doctor")
    {
    this.doc = true;
    this.getData.fetchProfileDataDoc({email : email}).subscribe((info)=>
    this.getinfo(info));
    }
   
  }
  getinfo(info){
    console.log(info);
     this.profile = info;
     this.result = this.profile;
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }

}
