import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForotPasswordComponent } from "./components/forot-password/forot-password.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DashBoardComponent } from './components/dash-board/dash-board.component';


const routes: Routes = [
    {
        path : '',
        component : DashBoardComponent,
        children : [
            {
                path : 'login',
                component : LoginComponent,
              },
              {
                path : 'forgotPassword',
                component : ForotPasswordComponent
              },
              {
                path : '',
                component : LoginComponent
              },
              {
                path : '**',
                component : NotFoundComponent
              }
        ]
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
