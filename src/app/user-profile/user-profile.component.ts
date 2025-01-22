import { Component, Input, SimpleChange, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input()
  userId:number = 0;
  userDetails: any = ''

  userDatas = [
    {id: 1, name:'User1', age:1, email:'user1@gmail.com'},
    {id:2, name: 'User2', age:2, email: 'user2@gmail.com'}
  ]

  ngOnChanges(changes: SimpleChanges) {
    if(changes['userId']['currentValue']) {
      this.fetchData(changes['userId']['currentValue']);
    }
  }

  fetchData(userId:number){
    this.userDetails = this.userDatas.find(userData => userData.id == userId) || null;
  }


}
