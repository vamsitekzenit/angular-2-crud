import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Post} from '../components/post.component';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{

constructor(private http:Http){
    
}
   
   getstudentlist(){

          return this.http.get("http://localhost:6060/student/getallstudentslist")
                 .map(res =>res.json());
   }

   getstudentlistsorted(type: string){

          return this.http.get("http://localhost:6060/student/getstudentslistsortbytype/"+type)
                 .map(res =>res.json());
   }

   savestudent(user:Object){
      
       return this.http.post("http://localhost:6060/student/save/", user, { 
           
        })
       .map(res =>  res.json());  
   }

   validateuser(user:Object){
       return this.http.post("http://localhost:6060/user/login/", user)
       .map(res =>  res.json());

   }
  
  saveuser(user:Object){
      
       return this.http.post("http://localhost:6060/user/register/", user, { 
           
        })
       .map(res =>  res.json());  
   }


}