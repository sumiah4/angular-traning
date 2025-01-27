import { Component } from '@angular/core';
import { MessagingService } from '../customServices/messaging.service';

@Component({
  selector: 'app-receiver',
  standalone: false,
  
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
  latestMessage: string = 'No messages yet';

  constructor(private messaging: MessagingService) {}

  ngOnInit() {
    this.messaging.message$.subscribe((message) => {
      this.latestMessage = message;
    });
  }

}
