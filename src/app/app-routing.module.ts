import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./gaurds/auth.guard";
import { UrlConfig } from "./core-module/url";


const routes: Routes = [
  {
    path:UrlConfig.BASIC_ROUTES.Auth,
    loadChildren : () => import('./auth-module/auth-module.module').then(m=>m.AuthModuleModule),
  },
  {
    path:UrlConfig.BASIC_ROUTES.admin,
    loadChildren : () => import('./home-module/home-module.module').then(m=>m.HomeModuleModule),
    canActivate : [AuthGuard]
  },
  {
    path: '',
    redirectTo: UrlConfig.BASIC_ROUTES.admin,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
