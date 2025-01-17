import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: false,
  
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {

  btnClicked:boolean = false;

  buttonClicked(){
    this.btnClicked = !this.btnClicked;
  }

  categories = [
    { name: 'Fruits', items: ['Apple', 'Banana', 'Orange'] },
    { name: 'Vegetables', items: ['Carrot', 'Broccoli', 'Spinach'] }
  ];

  roleLists:string[] = ['','admin', 'manager', 'lead', 'employee'];
  role:string = '';

}
