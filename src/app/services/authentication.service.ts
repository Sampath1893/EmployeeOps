import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {  
   }

  login(username: string, password: string) {
     
              if (username =="174" && password =="sampath") {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', username);
                  return true;
              }

             return false;
          };
  

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
