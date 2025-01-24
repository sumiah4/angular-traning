import { Component, ElementRef } from '@angular/core';
import { ToogleService } from '../customServices/toogle.service';
import { ItemService } from '../customDirective/item.service';

@Component({
  selector: 'app-directive-service',
  standalone: false,
  
  templateUrl: './directive-service.component.html',
  styleUrl: './directive-service.component.css'
})
export class DirectiveServiceComponent {

  constructor(public toggleService: ToogleService, public itemService: ItemService){

  }

  toggleStatuss:boolean = false;
  itemAdded:string = '';

  setToggleStatus(){
    this.toggleService.setToggleStatus();
  }

  addItems(items: HTMLInputElement) {
    if(items.value.trim()){
      this.itemAdded = items.value;
      this.itemService.addItems(this.itemAdded);
      this.itemAdded = '';
      items.focus();
    }
  }

}
