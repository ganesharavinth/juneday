import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from "../../../services/user-details.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public userFullName:string;
  constructor(private uD: UserDetailsService) { }

  ngOnInit() {
    
    this.uD.userDetails().subscribe((res)=>{
      console.log(res);
      this.userFullName = res
    },
      (err:Error)=>{
        alert(err.message)
      }
    );

  }

}
