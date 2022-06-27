import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent } from "./components/services/services.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { UrlConfig } from "../core-module/url";

const routes: Routes = [
  {
    path:"",
    component : AdminPageComponent,
    children:[
      {
        path:UrlConfig.BASIC_ROUTES.about,component:AboutComponent
      },
      {
        path:UrlConfig.BASIC_ROUTES.services,component:ServicesComponent
      },
      {
        path:UrlConfig.BASIC_ROUTES.logout,component:LogoutComponent
      },
      {
        path:UrlConfig.BASIC_ROUTES.home,component:HomepageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
