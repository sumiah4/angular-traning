import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleServiceService {

  constructor() { }

  toggleStatus:boolean = false;

  setToggleStatus(){
    this.toggleStatus = !this.toggleStatus;
    alert(this.toggleStatus);
  }
}
