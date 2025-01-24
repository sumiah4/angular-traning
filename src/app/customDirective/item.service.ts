import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  items:string[] = [];

  addItems(item: string) {
    //alert(item);
    this.items.push(item);
    console.log(this.items);
  }
}
