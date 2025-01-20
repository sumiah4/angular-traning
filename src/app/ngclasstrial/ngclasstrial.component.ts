import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclasstrial',
  standalone: false,
  
  templateUrl: './ngclasstrial.component.html',
  styleUrl: './ngclasstrial.component.css'
})
export class NgclasstrialComponent {

  changePara:boolean = false;

  onButtonClick(event: any) {
    this.changePara = event.target.value === 'true';
    console.log(typeof this.changePara);
  }


}
