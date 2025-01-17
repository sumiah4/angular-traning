import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  imageUrl:string = '/images/logo-in.png';

  paraContent:string = 'Hello theis is the new contest.I havent updated ';

  updateParaText(event:any) {   
    this.paraContent = event.target.value; 
  }

}
