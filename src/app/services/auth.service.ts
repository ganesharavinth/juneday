import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logginStatus:String;
  constructor() { }

  login({username,pwd}:any):Observable<any>{
    if(username == 'ganesh' && pwd == '123' || username == 'dhoni' && pwd == '123')
    {
      this.logginStatus = 'Y';
      localStorage.setItem('userName', username);
      return of({username:'ganesh',fullname:"GA"});
    }
    else
    {
      this.logginStatus = 'N';
      return throwError(new Error('Invalid user'));
    }
  }
}
