import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  imageUrl:string = '/images/logo-in.png';

  paraContent:string = 'Hello theis is the new contest.I havent updated.';
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Maryam' },
    { id: 3, name: 'George' }
  ];

  updateParaText(event:any) {   
    this.paraContent = event.target.value; 
  }

  

}
