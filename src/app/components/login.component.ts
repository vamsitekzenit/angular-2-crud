import { Component } from '@angular/core';
import {PostService} from  '../services/post.service'
import {ActivatedRoute, RouterModule,Router} from '@angular/router';



@Component({
  moduleId:module.id,//to provide template url
  selector: 'login',
  templateUrl: `login.component.html`,
  providers:[PostService],
  styles:[]

})

export class LoginComponent  {

    user: Object = {};

    posts:login[];

    // public name="";

    constructor(private postservice:PostService,private router : Router){

    }

    loginuser(user:Object){

      console.log(user);

     this.postservice.validateuser(user).subscribe(posts =>{
  this.posts=posts;

if(posts!=null){
   this.router.navigateByUrl('/student');
}
  
})
}

}



interface login{
  firstname:string;
  confirmmail:string;
  confirmpassword:string;
  email:string;
  lastname:string;
  password:string;
}