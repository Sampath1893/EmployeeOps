import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DailyLoginService {

  constructor(private http:HttpClient) { }

private _dailyLoginUrl="http://localhost:3000/api/dailyLogin";

updateDailyLogin(loginData){

  return this.http.post<any>(this._dailyLoginUrl,loginData)
}

}
