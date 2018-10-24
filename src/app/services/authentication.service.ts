import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DailyLoginService } from '../services/daily-login.service';
import {MatSnackBar} from '@angular/material';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(public snackBar: MatSnackBar,private http: HttpClient,private dailyLogin:DailyLoginService) {  
   }

   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
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

      res => {
        /*if(res.date=="SessionTimedOut"){
          this.openSnackBar("Logout Session Timed Out!","Close");
        }*/
        localStorage.removeItem('currentUser')},
      err => console.log(err)
    ) 
      
  }
}
