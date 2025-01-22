import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<div>
  //   <button value=1 (click)="setUserId($event)">User1</button>
  //   <button> value=2 (click)="setUserId($event)">User2</button>
  // </div>',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
  userId:number = 0;

  setUserId(event:any) {
    this.userId = event.target.value;
    console.log(this.userId);
  }
}
