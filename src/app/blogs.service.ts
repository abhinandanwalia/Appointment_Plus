import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  
  constructor( private http: HttpClient) { }
  newblog(blogModel:any){
     this.http.post('http://129.173.22.35:12345/blogs/',blogModel)
     .subscribe(responseData =>{
        console.log(responseData);
     });
  }
  getblogs(blogId){
    return this.http.get('http://129.173.22.35:12345/blogs/getblogs/'+blogId);
   
  }
}
