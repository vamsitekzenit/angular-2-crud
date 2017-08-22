import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import {UserComponent}  from './user.component';
import {LoginComponent}  from './login.component';
import {SignComponent} from './sign.component';

const appRoutes:Routes=[

{
    path:'student',
    component:UserComponent
},

{
    path:'',
    component:LoginComponent
},

{
    path:'sign',
    component:SignComponent
},

];

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);