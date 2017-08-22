import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import {HttpModule}  from '@angular/http';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { LoginComponent }  from './components/login.component';
import { SignComponent }  from './components/sign.component';
import {routing} from './components/app.routing'


@NgModule({
  imports:      [ BrowserModule ,FormsModule,HttpModule,routing],
  declarations: [ AppComponent,UserComponent,LoginComponent,SignComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
