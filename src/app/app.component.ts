import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
  userId:number = 0;

  setUserId(event:any) {
    this.userId = event.target.value;
  }
}
