import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToogleService {

  constructor() { }

  toggleStatus:boolean = false;

  setToggleStatus(){
    this.toggleStatus = !this.toggleStatus;
  }
}
