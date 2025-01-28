import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
  userId:number = 0;

  constructor(private router: Router){
    
  }

  setUserId(event:any) {
    this.userId = event.target.value;
  }
  goToProfile() {
    const userId = '123'; // Example user ID
    this.router.navigate(['/user', userId]);  // Navigate with the parameter
  }

}
