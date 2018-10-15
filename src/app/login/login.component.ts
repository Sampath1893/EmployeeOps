import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DailyLoginService } from '../services/daily-login.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide : boolean = true;
  returnUrl: string;
  userData = {}
  
  constructor(public snackBar: MatSnackBar, 
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private dailyLogin:DailyLoginService) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  checkLogin(){

  this.authenticationService.login(this.userData)
  .subscribe(
    res => {
            this.openSnackBar("Welcome "+res[0].name,"Close");
            localStorage.setItem('currentUser', res[0].employeeID);
            this.router.navigate([this.returnUrl]);
            this.updateDailyLogin();
      
          
          },
    err => this.openSnackBar(err.error,"close")
  )
    
  }
  updateDailyLogin(){
   const pipe = new DatePipe('en-US');
   const loginTime= new Date;

    let uploadObj={

      date: pipe.transform(loginTime,'shortDate'),
       // @ts-ignore
  employeeID: this.userData.userID,
  inTime: pipe.transform(loginTime,'mediumTime')


    }
   

    this.dailyLogin.updateDailyLogin(uploadObj)
            .subscribe(

              res => console.log(res),
              err => console.log(err)
            ) 
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

}
