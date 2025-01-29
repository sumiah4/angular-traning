import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    alert('login');
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['home']);
  }

}
