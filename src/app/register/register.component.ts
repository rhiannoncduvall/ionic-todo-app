import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
// Need to import router from angular to allow users who've logged in to navigate to certain pages

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {}

  register(newUserInfo) {
    console.log(`New user info: ${newUserInfo.firstName}, ${newUserInfo.lastName}, ${newUserInfo.email}`);
    this.userService.postAppUser(newUserInfo).subscribe(res=> {
      console.log(res);
      // Add code here to add privledges
    });
  }
  
}
