import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public appPages = [
    {
      title: 'Todos',
      url: '/home',
    },
    {
      title: 'Login',
      url: '/login'
    },
    {
      title: 'Register',
      url: '/register'
    }
  ]
  constructor(private router: Router, private actRoute: ActivatedRoute) { }


}
