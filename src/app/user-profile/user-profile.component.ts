import { Component, Input, SimpleChange, OnChanges} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input()
  userId:number = 1;
  userDetails: any = ''

  userData = [
    {name:'abd', age:21, email:'abc@gmail.com'},
    {name: 'asd', age: 34, email: 'asd@gmail.com'}
  ]

  ngOnChanges(changes: SimpleChange) {
    console.log('hello')
    console.log(changes.currentValue);
    //if(changes.currentValue) {
      console.log(changes.currentValue);
      this.fetchData(changes.currentValue);
    //}
  }

  fetchData(userId:number){
    console.log(this.userData[1]);
    console.log( this.userData[userId]);
    this.userDetails = this.userData[userId];
    console.log(this.userDetails);
  }


}
