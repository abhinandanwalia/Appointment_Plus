// Developed by Akhil teja B00825307
import { Component, OnInit,HostListener } from '@angular/core';
import {BlogsService} from '../blog.service';
import { ActivatedRoute,Router } from "@angular/router";
import { Options, ImageResult } from "ngx-image2dataurl";
import { GetdataService } from '../getdata.service';
@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  imageUrl:string="";
  blog_title:string="";
  blog_description:string="";
  blog_title_validation:boolean = true;
blog_description_validation:boolean=true;
blog_image_validation:boolean=true;
users : string;
guest : boolean;
doc : boolean;
patient : boolean;
  public blogData:any ={};
  
  constructor(private blogService: BlogsService,private router: Router,private route: ActivatedRoute,private getdataservice:GetdataService ) { }
  @HostListener("window:onbeforeunload",["$event"])
  clearLocalStorage(event){
    sessionStorage.clear();
  }
  options: Options = {
    resize: {
      maxHeight: 500,
      maxWidth: 500
    },
    allowedExtensions: ['JPG', 'PnG','JPEG']
  };
  selected(imageResult: ImageResult) {
    if (imageResult.error) {
      alert(imageResult.error)
    };
    this.imageUrl = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
      debugger;
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
      
    }
    this.imageUrl="";
    this.blog_title="";
    this.blog_description="";
    this.blogData={};
    this.blog_title_validation = true;
    this.blog_description_validation=true;
    this.blog_image_validation=true;
    this.route.queryParams
      .subscribe(params => {
        this.users = params['usr'];
        if(this.users == "guest"){
          this.guest = true
        }
         if(this.users == "doctor"){
          this.doc = true
        }
         if(this.users == "patient"){
          this.patient = true
        }

      });
  }

  cancel_blog(){
    this.router.navigate(['/blogs'], { queryParams:  {usr:"doctor"}});
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }
 
  submit_blog(){
    
    if(this.blog_title !=""){
      this.blog_title_validation=true;
    }
    else{
      this.blog_title_validation=false;
    }
    if(this.blog_description !=""){
      this.blog_description_validation=true;
    }
    else{
      this.blog_description_validation=false;
    }
    if(this.imageUrl != ""){
        this.blog_image_validation=true;
    }
    else{
      this.blog_image_validation=false;
    }
   
    if(this.blog_title_validation && this.blog_description_validation && this.blog_image_validation){
      this.blogData={
        blogTitle: this.blog_title,
        blogImage:this.imageUrl,
        blogDescription:this.blog_description
      }
      
      this.blogService.newblog(this.blogData);
      alert("Blog created successfully");
      setTimeout(() => 
{
  this.router.navigate(['/blogs'], { queryParams:  {usr:"doctor"}});
},
2000);
      
      
    }
     
  }
}

