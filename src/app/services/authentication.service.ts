import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DailyLoginService } from '../services/daily-login.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private http: HttpClient,private dailyLogin:DailyLoginService) {  
   }
   private _loginUrl="http://localhost:3000/api/login";
  login(userData) {
     

    return this.http.post<any>(this._loginUrl,userData)
              
          };
  

  logout() {

    const pipe = new DatePipe('en-US');
   const logoutTime= new Date;
    let uploadObj={

      date: pipe.transform(logoutTime,'shortDate'),
       // @ts-ignore
  employeeID: localStorage.getItem('currentUser'),
  outTime: pipe.transform(logoutTime,'mediumTime')
    }

    this.dailyLogin.updateDailyLogin(uploadObj)
    .subscribe(

      res => localStorage.removeItem('currentUser'),
      err => console.log(err)
    ) 
      
  }
}
