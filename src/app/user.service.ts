import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

userInfo =   {
  firstName: "",
  lastName: "",
  email: "",
}

loginInfo = {
  email: "",
  password: ""
}

baseUrl = 'http://localhost:3000/api/appUsers';

postAppUser(userInfo) {
  return this.http.post(`${this.baseUrl}`, userInfo);
}

postAppUserLogin(loginInfo) {
  return this.http.post(`${this.baseUrl}/login`,loginInfo)
}

}
