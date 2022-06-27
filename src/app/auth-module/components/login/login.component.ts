import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";
import { UrlConfig } from "../../../core-module/url";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  public userdetails: any;
  ngOnInit() {
  }

  public lfm : FormGroup = new FormGroup({
    username : new FormControl(''),
    pwd : new FormControl('')
  });

  public onSubmit()
  {
    console.log(this.lfm.value);
    this.authService.login(this.lfm.value).subscribe((result)=>{this.userdetails = result},(err:Error)=>{alert(err.message)});

    if(this.authService.logginStatus == 'Y')
    {
      console.log(this.userdetails);
      this.router.navigate(['./' + UrlConfig.BASIC_ROUTES.admin]);
    }
  
  }

}
