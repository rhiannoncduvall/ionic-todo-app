import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {}

  login(loginInfo) {
    console.log(`Login info: ${loginInfo.email}, ${loginInfo.password}`);
    this.userService.postAppUserLogin(loginInfo).subscribe(res=> {
      console.log(res);
    });
  }

}
