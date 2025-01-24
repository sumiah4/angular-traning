import { Component, ElementRef } from '@angular/core';
import { ToogleService } from '../customServices/toogle.service';
import { ItemService } from '../customDirective/item.service';
import { Observable, from } from 'rxjs';

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
  counters:any[] = [];

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
  countervalues:number[] = [2,3,4,5];
  myObservable = from(this.countervalues);
  
  // myObservable = new Observable((observer) => {
  //   let i = 1;

  // const intervalId = setInterval(() => {
  //   if (i <= 10) {
  //     observer.next(i);
  //     i++;
  //   } 
  //   else {
  //     observer.complete();
  //   }
  // }, 1000);
    
  // });

  getCounter() {
    this.myObservable.subscribe((val:any)=>{
      console.log(val);
      this.counters.push(val);
    },
    (err) =>{
      alert(err.message);
    },
    () => {
      alert('Observable completed');
    });
  }

}
