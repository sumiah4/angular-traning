import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclasstrial',
  standalone: false,
  
  templateUrl: './ngclasstrial.component.html',
  styleUrl: './ngclasstrial.component.css'
})
export class NgclasstrialComponent {

  changePara:string = 'red';

  onButtonClick(event: any) {
    this.changePara = event.target.value;
  }


}
