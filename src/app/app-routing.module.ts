import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home', redirectTo: 'login', pathMatch: 'full'},
  { path: 'todo', component: TodoComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
