import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DataService } from '../customServices/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // template: `
  //   <h2>Welcome to the Home Page</h2>
  //   <button (click)="goToProfile()">Go to User Profile</button>
  // `
})
export class HomeComponent {
  data: any;
  submittedForm: FormGroup;
  constructor(private router: Router, private dataService: DataService, private form: FormBuilder) {
    this.submittedForm = this.form.group({
      name: '',
      email: ''
    });

  }

  goToProfile() {
    const userId = '101';
    this.router.navigate(['/user', userId]);
  }

  logout() {
    console.log( localStorage);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
   // alert('lll');
    this.dataService.getData()
        .subscribe(
            response => {
                this.data = response;
                console.log(response);
            },
            error => {
                console.error('Error fetching data:', error);
            }
        );
  }

  onSubmit() {
      this.dataService.postData(this.submittedForm.value).subscribe(response => {
        alert('Form submitted successfully!');
      }, error => {
        console.error('Error:', error);
      });
  }



}
