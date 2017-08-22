import { Component } from '@angular/core'
import {PostService} from  '../services/post.service';

@Component({
 moduleId:module.id,
  selector: 'sign',
  templateUrl: `sign.component.html`,
 providers:[PostService]
})
export class SignComponent  { 

    user:Object={};
    posts:Sign[];

    constructor(private postservice:PostService){
        
    }
    
saveuser(user:Object){
  console.log(user);
  this.postservice.saveuser(user).subscribe(posts =>{
  this.posts=posts;
})
}
 
}

interface Sign{
  firstname:string;
  confirmmail:string;
  confirmpassword:string;
  email:string;
  lastname:string;
  password:string;
}