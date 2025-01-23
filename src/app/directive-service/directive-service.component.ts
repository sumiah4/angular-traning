import { Component } from '@angular/core';
import { ToggleServiceService } from '../customServices/toggle-service.service';

@Component({
  selector: 'app-directive-service',
  standalone: false,
  
  templateUrl: './directive-service.component.html',
  styleUrl: './directive-service.component.css'
})
export class DirectiveServiceComponent {

  constructor(public toggleService: ToggleServiceService){

  }

  toggleStatuss:boolean = false;

  setToggleStatus(){
    this.toggleService.setToggleStatus();
  }

}
