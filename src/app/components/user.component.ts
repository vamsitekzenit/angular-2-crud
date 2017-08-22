import { Component } from '@angular/core';
import {Post} from '../components/post.component';
import {PostService} from  '../services/post.service'

@Component({
  moduleId:module.id,//to provide template url
  selector: 'user',
  templateUrl: `user.component.html`,
  providers:[PostService]
})
export class UserComponent  {

  

    user: Object = {

      'passport':{},
      'phone':[
       {
         'phonenumber':''
       },
       {
         'phonenumber':''
       }
      ],
      'qualification':[
       {
         'qualification':''
       }
      ],
    };

// user:Post[]=[]

  // name :string ; 
  // email:string
  // address:address;
  
  posts:Post[];

constructor(private postservice:PostService){
  
  //  this.name = 'vamsi'; 
  // this.email='vamsi1153@gmail.com'
  // this.address={
  //   street:'xyz',
  //   city:'hyd'
  // }

  

}
getstudentlist(){
  this.postservice.getstudentlist().subscribe(posts =>{
  this.posts=posts;
})
}
sortbyname(){
  this.postservice.getstudentlistsorted("name").subscribe(posts =>{
  this.posts=posts;
})
}

sortbyage(){
  this.postservice.getstudentlistsorted("age").subscribe(posts =>{
  this.posts=posts;
})
}

savestudent(user:Post){
  console.log(user);
  this.postservice.savestudent(user).subscribe(posts =>{
  this.posts=posts;
})
}

}



interface address{
  street:string;
  city:string;
}



