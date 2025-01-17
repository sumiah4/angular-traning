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

}
