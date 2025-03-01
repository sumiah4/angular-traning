import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://localhost'; 

  //constructor() { }
  constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    }
    postData(formData: any): Observable<any> {
      console.log(formData);
      return this.http.post(this.apiUrl, formData);
    }
}
