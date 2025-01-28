import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profiles',
  standalone: false,
  
  templateUrl: './user-profiles.component.html',
  styleUrl: './user-profiles.component.css'
})
export class UserProfilesComponent {

  userId: string | null= '';

  constructor(private route: ActivatedRoute) {}

 
  ngOnInit(): void {
    // Access the route parameter 'id' using snapshot.paramMap
    this.userId = this.route.snapshot.paramMap.get('id');
    //alert('ji');
  }

}
