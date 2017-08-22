import { Component } from '@angular/core';

@Component({
  moduleId:module.id,//to provide template url
 template: `
  `,
})

export class Post{
    id:number;
    name:string;
    age:number;
    passport:{
      id:number;
      passportno:number;
    };
    phone:[{
      id:number;
      phonenumber:number
    }];
    qualification:[{
      id:number;
      qualification:string
    }]

}