import { Injectable } from '@angular/core';
import { Observable,of, throwError} from 'rxjs';
import { LoginData } from "../data/loginData";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  username:string;
  constructor() { }

  userDetails() :Observable<any>{
    this.username = localStorage.getItem('userName');

    console.log(LoginData[this.username]);

    if(LoginData[this.username])
    {
      return of(LoginData[this.username]);
    }
    else{
      return throwError(new Error('Invalid user'));
    }
  }
}
