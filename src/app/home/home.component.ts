import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // template: `
  //   <h2>Welcome to the Home Page</h2>
  //   <button (click)="goToProfile()">Go to User Profile</button>
  // `
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToProfile() {
    const userId = '101';
    this.router.navigate(['/user', userId]);
  }

  logout() {
    console.log( localStorage);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }


}
