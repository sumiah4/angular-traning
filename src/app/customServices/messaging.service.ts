import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor() { }

  private messageSubject = new Subject<string>;
  message$ = this.messageSubject.asObservable();
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
