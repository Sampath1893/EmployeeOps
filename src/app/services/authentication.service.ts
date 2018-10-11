import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private http: HttpClient) {  
   }
   private _loginUrl="http://localhost:3000/api/login";
  login(userData) {
     

    return this.http.post<any>(this._loginUrl,userData)
              
          };
  

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
