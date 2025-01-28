import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  //templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  template: `
    <h2>Welcome to the Home Page</h2>
    <button (click)="goToProfile()">Go to User Profile</button>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToProfile() {
    const userId = '101'; // Example user ID
    this.router.navigate(['/user', userId]);  // Navigate to the route with the parameter
  }


}
