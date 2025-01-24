import { Component } from '@angular/core';
//import { ToggleServiceService } from '../customServices/toggle.service';
import { ToogleService } from '../customServices/toogle.service';

@Component({
  selector: 'app-directive-service',
  standalone: false,
  
  templateUrl: './directive-service.component.html',
  styleUrl: './directive-service.component.css'
})
export class DirectiveServiceComponent {

  constructor(public toggleService: ToogleService){

  }

  toggleStatuss:boolean = false;

  setToggleStatus(){
    this.toggleService.setToggleStatus();
  }

}
