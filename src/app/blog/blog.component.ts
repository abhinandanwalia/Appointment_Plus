import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BlogsService} from '../blog.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
users : string;
guest : boolean;
doc : boolean;
patient : boolean;
blog_info:any;
temp_blog:any;
blog_infofirst:any;
title:string="";
show_blog_data:boolean=false;
blog_title:string="";
blog_description:string="";
blog_image:string="";

  constructor( private location: Location,private route: ActivatedRoute,
    private router: Router,private blogService: BlogsService) { }

  ngOnInit() {
    this.show_blog_data=false;
    this.blog_image="";
    this.blog_title="";
    this.blog_description="";
   
     this.route.queryParams
      .subscribe(params => {
        this.users = params['usr'];
        if(this.users == "guest"){
          var usertype =sessionStorage.getItem("userType");
          if(usertype == "patient")
          {
            this.location.replaceState("/blogs?usr=patient");
            this.patient = true
          }
          else if(usertype ==null)
          {
            this.location.replaceState("/blogs?usr=guest");
            this.guest = true
      
          }
          else if(usertype=="doctor")
          {
            this.location.replaceState("/blogs?usr=doctor");
            this.doc = true
          }
          
          
        }
         if(this.users == "doctor"){
          var usertype =sessionStorage.getItem("userType");
          if(usertype == "patient")
          {
            this.location.replaceState("/blogs?usr=patient");
            this.patient = true
          }
          else if(usertype ==null)
          {
            this.location.replaceState("/blogs?usr=guest");
            this.guest = true
      
          }
          else if(usertype=="doctor")
          {
            this.location.replaceState("/blogs?usr=doctor");
            this.doc = true
          }
          
        }
         if(this.users == "patient"){
          var usertype =sessionStorage.getItem("userType");
          if(usertype == "patient")
          {
            this.location.replaceState("/blogs?usr=patient");
            this.patient = true
          }
          else if(usertype ==null)
          {
            this.location.replaceState("/blogs?usr=guest");
            this.guest = true
      
          }
          else if(usertype=="doctor")
          {
            this.location.replaceState("/blogs?usr=doctor");
            this.doc = true
          }
        }

      });
      this.blog_info=[];
      this.temp_blog=[];
      this.blog_infofirst={};
      this.blogService.getblogs(0).subscribe(blogData =>{
        
        this.blog_infofirst =blogData;
        
        this.insertdata(this.blog_infofirst);
      });
  }

  insertdata(blogdata_change){
    if(blogdata_change.message.length <= 3){
      for(var blog in blogdata_change.message)
      {
        this.temp_blog.push(blogdata_change.message[blog]);
      }
      this.blog_info.push(this.temp_blog);
    }
    else
    {
      for(var blog in blogdata_change.message)
      {
        this.temp_blog.push(blogdata_change.message[blog]);
        if((blogdata_change.message[blog].Blogid)%3 ==0 && blogdata_change.message[blog].Blogid !=1 )
        {
          this.blog_info.push(this.temp_blog);
          this.temp_blog=[];
        }
      }
      this.blog_info.push(this.temp_blog);
    }
  }
  onBlogHome(){
    this.show_blog_data =false;
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }

  getOneblog(blogId){
    this.show_blog_data=true;
    this.blog_description="";
    this.blog_title="";
    this.blog_image="";
    this.blogService.getblogs(blogId).subscribe(blogData =>{
        debugger;
      this.blog_infofirst =blogData;
      this.blog_image= this.blog_infofirst.message[0].image;
      this.blog_title= this.blog_infofirst.message[0].Title;
      this.blog_description = this.blog_infofirst.message[0].Description;
     // this.insertdata(this.blog_infofirst);
    });
  }

}
