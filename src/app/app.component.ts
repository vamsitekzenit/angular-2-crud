import { Component } from '@angular/core';
// import {LoginComponent}  from './components/login.component';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>

   <a routerLink="/sign">SignUp<a>
  `,
  // directives:[LoginComponent]
})
export class AppComponent  { 
 
}
  // <a routerLink="/">Login<a>

  // <a routerLink="/student">Student<a>
  