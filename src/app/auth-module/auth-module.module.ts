import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { ForotPasswordComponent } from './components/forot-password/forot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent, 
    ForotPasswordComponent, 
    NotFoundComponent, 
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    DashBoardComponent
  ]
})
export class AuthModuleModule { }
