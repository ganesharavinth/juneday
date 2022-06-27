import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [AdminPageComponent, AboutComponent, ServicesComponent, LogoutComponent, HomepageComponent],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ],
  exports:[
    AdminPageComponent
  ]
})
export class HomeModuleModule { }
