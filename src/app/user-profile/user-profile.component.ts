import { Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input()
  userId:number = 0;

  ngOnChanges(changes: SimpleChange): void {
    console.log('hello');
  }


}
